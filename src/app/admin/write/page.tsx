"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  ArrowLeft, Send, CheckCircle, AlertCircle, Eye,
  Check, X, RefreshCw, Clock, Trash2, Lock,
} from "lucide-react";

const CATEGORIES = [
  "Corporate Law", "Tax Law", "Intellectual Property", "Litigation",
  "Real Estate", "Employment Law", "Family Law", "Criminal Defense",
  "Immigration", "Estate Planning", "Other",
];

// ── Types ────────────────────────────────────────────────────────────────────

interface PendingPost {
  id: string;
  submittedAt: string;
  submitterName: string;
  submitterEmail: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
}

interface Post {
  slug: string;
  date: string;
  isoDate: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
}

// ── Password Gate ────────────────────────────────────────────────────────────

function PasswordGate({ onSuccess }: { onSuccess: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        sessionStorage.setItem("admin_authed", "1");
        onSuccess();
      } else {
        const data = await res.json();
        setError(data.error || "Incorrect password.");
      }
    } catch {
      setError("Could not connect. Try again.");
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Lock size={36} className="text-[#c9a84c] mx-auto mb-4" />
          <h1 className="font-display text-2xl text-white mb-1">Admin Access</h1>
          <p className="text-white/40 text-sm">Enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoFocus
            required
            className="w-full bg-white/5 border border-white/10 focus:border-[#c9a84c] outline-none px-4 py-3 text-white placeholder:text-white/20 transition-colors"
          />

          {error && (
            <div className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle size={14} /> {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#c9a84c] text-black text-sm uppercase tracking-widest font-bold hover:bg-[#a8892e] transition-colors disabled:opacity-50"
          >
            {loading ? "Checking…" : "Enter"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link href="/insights" className="text-white/30 text-xs uppercase tracking-widest hover:text-white/50 transition-colors">
            ← Back to Insights
          </Link>
        </div>
      </div>
    </div>
  );
}

// ── Manage Articles Tab ──────────────────────────────────────────────────────

function ManageTab() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [confirmSlug, setConfirmSlug] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(Array.isArray(data) ? data : []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function deletePost(slug: string) {
    setDeleting(slug);
    await fetch("/api/posts", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    await load();
    setDeleting(null);
    setConfirmSlug(null);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-[#999] text-sm">
        <RefreshCw size={16} className="animate-spin mr-2" /> Loading…
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-[#999] text-sm">No published articles.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <div key={post.slug} className="bg-white border border-[#e0e0e0] p-5 flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-1">
              <span className="text-[#c9a84c] text-[10px] uppercase tracking-[0.2em] font-bold bg-[#c9a84c]/10 px-2 py-0.5">
                {post.category}
              </span>
              <span className="text-[#999] text-xs">{post.date}</span>
            </div>
            <h3 className="text-[#0a0a0a] font-display text-base leading-snug mb-1">{post.title}</h3>
            <p className="text-[#999] text-xs truncate">{post.excerpt}</p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              href={`/insights/${post.slug}`}
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#e0e0e0] text-[#666] text-xs uppercase tracking-widest hover:border-[#c9a84c] transition-colors"
            >
              <Eye size={11} /> View
            </Link>

            {confirmSlug === post.slug ? (
              <div className="flex items-center gap-2">
                <span className="text-[#999] text-xs">Sure?</span>
                <button
                  onClick={() => deletePost(post.slug)}
                  disabled={deleting === post.slug}
                  className="inline-flex items-center gap-1 px-3 py-2 bg-red-500 text-white text-xs uppercase tracking-widest font-bold hover:bg-red-600 transition-colors disabled:opacity-40"
                >
                  <Trash2 size={11} /> {deleting === post.slug ? "…" : "Delete"}
                </button>
                <button
                  onClick={() => setConfirmSlug(null)}
                  className="px-3 py-2 border border-[#e0e0e0] text-[#999] text-xs uppercase tracking-widest hover:border-[#999] transition-colors"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmSlug(post.slug)}
                className="inline-flex items-center gap-1.5 px-3 py-2 border border-red-200 text-red-400 text-xs uppercase tracking-widest hover:bg-red-50 transition-colors"
              >
                <Trash2 size={11} /> Delete
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Review Tab ───────────────────────────────────────────────────────────────

function ReviewTab() {
  const [pending, setPending] = useState<PendingPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [processing, setProcessing] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    const res = await fetch("/api/pending");
    const data = await res.json();
    setPending(Array.isArray(data) ? data : []);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  async function act(id: string, action: "approve" | "reject") {
    setProcessing(id);
    await fetch("/api/pending", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, id }),
    });
    await load();
    setProcessing(null);
    if (expanded === id) setExpanded(null);
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20 text-[#999] text-sm">
        <RefreshCw size={16} className="animate-spin mr-2" /> Loading submissions…
      </div>
    );
  }

  if (pending.length === 0) {
    return (
      <div className="text-center py-20">
        <Clock size={36} className="text-[#ccc] mx-auto mb-4" />
        <p className="text-[#999] text-sm">No pending submissions.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {pending.map((post) => {
        const isExpanded = expanded === post.id;
        const isProcessing = processing === post.id;
        const submitted = new Date(post.submittedAt).toLocaleDateString("en-US", {
          year: "numeric", month: "short", day: "numeric",
        });

        return (
          <div key={post.id} className="bg-white border border-[#e0e0e0] overflow-hidden">
            <div className="flex items-start justify-between gap-4 p-6">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-[#c9a84c] text-[10px] uppercase tracking-[0.2em] font-bold bg-[#c9a84c]/10 px-2 py-0.5">
                    {post.category}
                  </span>
                  <span className="text-[#999] text-xs">{submitted}</span>
                </div>
                <h3 className="text-[#0a0a0a] font-display text-lg leading-snug mb-1">{post.title}</h3>
                <p className="text-[#999] text-xs">
                  By <span className="text-[#555]">{post.submitterName}</span>
                  {post.submitterEmail && <> · <span className="text-[#999]">{post.submitterEmail}</span></>}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setExpanded(isExpanded ? null : post.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 border border-[#e0e0e0] text-[#666] text-xs uppercase tracking-widest hover:border-[#c9a84c] transition-colors"
                >
                  <Eye size={11} /> {isExpanded ? "Hide" : "Preview"}
                </button>
                <button
                  onClick={() => act(post.id, "reject")}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-1.5 px-3 py-2 border border-red-200 text-red-500 text-xs uppercase tracking-widest hover:bg-red-50 transition-colors disabled:opacity-40"
                >
                  <X size={11} /> Reject
                </button>
                <button
                  onClick={() => act(post.id, "approve")}
                  disabled={isProcessing}
                  className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#c9a84c] text-black text-xs uppercase tracking-widest font-bold hover:bg-[#a8892e] transition-colors disabled:opacity-40"
                >
                  <Check size={11} /> {isProcessing ? "…" : "Approve"}
                </button>
              </div>
            </div>

            {isExpanded && (
              <div className="border-t border-[#e0e0e0] bg-[#fafaf9] px-6 py-5">
                <p className="text-[10px] uppercase tracking-widest text-[#999] mb-2">Excerpt</p>
                <p className="text-[#555] text-sm mb-5 italic">{post.excerpt}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#999] mb-2">Article Body</p>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {post.content.split("\n\n").filter(Boolean).map((para, i) => (
                    <p key={i} className="text-[#444] text-sm leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Write Tab ────────────────────────────────────────────────────────────────

function WriteTab() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [publishedSlug, setPublishedSlug] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
  const readTime = Math.max(1, Math.ceil(wordCount / 200));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, category, excerpt, content }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unknown error");
      setPublishedSlug(data.slug);
      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="max-w-md w-full text-center">
          <CheckCircle size={56} className="text-[#c9a84c] mx-auto mb-6" />
          <h2 className="font-display text-3xl text-[#0a0a0a] mb-3">Article Published</h2>
          <p className="text-[#999] mb-8">Your article is now live on the Insights page.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/insights/${publishedSlug}`}
              className="px-6 py-3 bg-[#c9a84c] text-black text-sm uppercase tracking-widest font-bold hover:bg-[#a8892e] transition-colors"
            >
              View Article
            </Link>
            <button
              onClick={() => { setTitle(""); setCategory(CATEGORIES[0]); setExcerpt(""); setContent(""); setStatus("idle"); }}
              className="px-6 py-3 border border-[#e0e0e0] text-[#0a0a0a] text-sm uppercase tracking-widest hover:border-[#c9a84c] transition-colors"
            >
              Write Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-[1fr_260px] gap-8">
        <div className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#999] mb-2">Article Title *</label>
            <input
              type="text" value={title} onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a compelling headline..." required
              className="w-full bg-white border border-[#e0e0e0] focus:border-[#c9a84c] outline-none px-4 py-3 text-[#0a0a0a] font-display text-2xl placeholder:text-[#ccc] transition-colors"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-[#999] mb-2">
              Excerpt / Summary * <span className="text-[#ccc] normal-case tracking-normal">(1–2 sentences)</span>
            </label>
            <textarea
              value={excerpt} onChange={(e) => setExcerpt(e.target.value)}
              placeholder="A short summary that draws readers in..." required rows={3}
              className="w-full bg-white border border-[#e0e0e0] focus:border-[#c9a84c] outline-none px-4 py-3 text-[#444] text-sm leading-relaxed placeholder:text-[#ccc] resize-none transition-colors"
            />
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[10px] uppercase tracking-widest text-[#999]">
                Article Body * <span className="text-[#ccc] normal-case tracking-normal">(blank line between paragraphs)</span>
              </label>
              <button type="button" onClick={() => setPreview(!preview)}
                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#c9a84c] hover:opacity-70 transition-opacity">
                <Eye size={11} /> {preview ? "Edit" : "Preview"}
              </button>
            </div>
            {preview ? (
              <div className="bg-white border border-[#e0e0e0] px-6 py-6 min-h-[400px] space-y-4">
                {content.split("\n\n").filter(Boolean).map((para, i) => (
                  <p key={i} className="text-[#444] leading-relaxed text-[1.05rem]">{para}</p>
                ))}
                {!content && <p className="text-[#ccc] italic">Nothing to preview yet…</p>}
              </div>
            ) : (
              <textarea
                value={content} onChange={(e) => setContent(e.target.value)}
                placeholder={"Write your article here...\n\nLeave a blank line between paragraphs."}
                required rows={20}
                className="w-full bg-white border border-[#e0e0e0] focus:border-[#c9a84c] outline-none px-4 py-4 text-[#444] text-sm leading-relaxed placeholder:text-[#ccc] resize-y transition-colors font-mono"
              />
            )}
          </div>
          {status === "error" && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">
              <AlertCircle size={16} /> {errorMsg}
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-[#e0e0e0] p-6">
            <p className="text-[10px] uppercase tracking-widest text-[#999] mb-1">Publish</p>
            <p className="text-[10px] text-[#ccc] mb-4">{wordCount} words · {readTime} min read</p>
            <button
              type="submit" disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#c9a84c] text-black text-sm uppercase tracking-widest font-bold hover:bg-[#a8892e] transition-colors disabled:opacity-50"
            >
              {status === "submitting" ? "Publishing..." : <><Send size={13} /> Publish Article</>}
            </button>
          </div>
          <div className="bg-white border border-[#e0e0e0] p-6">
            <label className="block text-[10px] uppercase tracking-widest text-[#999] mb-3">Category *</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#f8f7f4] border border-[#e0e0e0] focus:border-[#c9a84c] outline-none px-3 py-2 text-sm text-[#0a0a0a] transition-colors">
              {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

type Tab = "write" | "review" | "manage";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [tab, setTab] = useState<Tab>("write");
  const [pendingCount, setPendingCount] = useState<number | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem("admin_authed") === "1") setAuthed(true);
  }, []);

  useEffect(() => {
    if (!authed) return;
    fetch("/api/pending")
      .then((r) => r.json())
      .then((data) => Array.isArray(data) && setPendingCount(data.length))
      .catch(() => {});
  }, [authed, tab]);

  if (!authed) return <PasswordGate onSuccess={() => setAuthed(true)} />;

  function tabClass(t: Tab) {
    return `px-5 py-4 text-xs uppercase tracking-widest border-b-2 transition-colors flex items-center gap-2 ${
      tab === t
        ? "border-[#c9a84c] text-[#0a0a0a] font-bold"
        : "border-transparent text-[#999] hover:text-[#0a0a0a]"
    }`;
  }

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      <div className="bg-[#0a0a0a] py-5 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link href="/insights"
            className="inline-flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest hover:text-[#c9a84c] transition-colors">
            <ArrowLeft size={12} /> Insights
          </Link>
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-bold">Admin</p>
          <button
            onClick={() => { sessionStorage.removeItem("admin_authed"); setAuthed(false); }}
            className="text-white/30 text-xs uppercase tracking-widest hover:text-white/60 transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>

      <div className="bg-white border-b border-[#e0e0e0] px-4">
        <div className="max-w-5xl mx-auto flex">
          <button onClick={() => setTab("write")} className={tabClass("write")}>
            Write Article
          </button>
          <button onClick={() => setTab("review")} className={tabClass("review")}>
            Review Submissions
            {pendingCount !== null && pendingCount > 0 && (
              <span className="bg-[#c9a84c] text-black text-[10px] font-bold px-1.5 py-0.5 min-w-[18px] text-center">
                {pendingCount}
              </span>
            )}
          </button>
          <button onClick={() => setTab("manage")} className={tabClass("manage")}>
            Manage Articles
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {tab === "write" && <WriteTab />}
        {tab === "review" && <ReviewTab />}
        {tab === "manage" && <ManageTab />}
      </div>
    </div>
  );
}
