"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle, AlertCircle, Eye } from "lucide-react";

const CATEGORIES = [
  "Corporate Law",
  "Tax Law",
  "Intellectual Property",
  "Litigation",
  "Real Estate",
  "Employment Law",
  "Family Law",
  "Criminal Defense",
  "Immigration",
  "Estate Planning",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function WritePostPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
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
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center">
          <CheckCircle size={56} className="text-[#c9a84c] mx-auto mb-6" />
          <h1 className="font-display text-3xl text-white mb-3">Article Published</h1>
          <p className="text-white/50 mb-8">Your article is now live on the Insights page.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/insights/${publishedSlug}`}
              className="px-6 py-3 bg-[#c9a84c] text-black text-sm uppercase tracking-widest font-bold hover:bg-[#a8892e] transition-colors"
            >
              View Article
            </Link>
            <button
              onClick={() => {
                setTitle(""); setCategory(CATEGORIES[0]); setExcerpt(""); setContent("");
                setStatus("idle"); setPublishedSlug("");
              }}
              className="px-6 py-3 border border-white/20 text-white text-sm uppercase tracking-widest hover:border-[#c9a84c] transition-colors"
            >
              Write Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      {/* Admin Header */}
      <div className="bg-[#0a0a0a] py-5 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest hover:text-[#c9a84c] transition-colors"
          >
            <ArrowLeft size={12} /> Insights
          </Link>
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-bold">Admin — Write Article</p>
          <div className="text-white/30 text-xs">{wordCount} words · {readTime} min read</div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-[1fr_260px] gap-8">
          {/* Main Editor */}
          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#999] mb-2">Article Title *</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter a compelling headline..."
                required
                className="w-full bg-white border border-[#e0e0e0] focus:border-[#c9a84c] outline-none px-4 py-3 text-[#0a0a0a] font-display text-2xl placeholder:text-[#ccc] transition-colors"
              />
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-[10px] uppercase tracking-widest text-[#999] mb-2">
                Excerpt / Summary * <span className="text-[#ccc] normal-case tracking-normal">(shown on listings — 1–2 sentences)</span>
              </label>
              <textarea
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A short summary that draws readers in..."
                required
                rows={3}
                className="w-full bg-white border border-[#e0e0e0] focus:border-[#c9a84c] outline-none px-4 py-3 text-[#444] text-sm leading-relaxed placeholder:text-[#ccc] resize-none transition-colors"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-[10px] uppercase tracking-widest text-[#999]">
                  Article Body * <span className="text-[#ccc] normal-case tracking-normal">(separate paragraphs with a blank line)</span>
                </label>
                <button
                  type="button"
                  onClick={() => setPreview(!preview)}
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#c9a84c] hover:opacity-70 transition-opacity"
                >
                  <Eye size={11} /> {preview ? "Edit" : "Preview"}
                </button>
              </div>

              {preview ? (
                <div className="bg-white border border-[#e0e0e0] px-6 py-6 min-h-[400px] space-y-4">
                  {content.split("\n\n").filter(Boolean).map((para, i) => (
                    <p key={i} className="text-[#444] leading-relaxed text-[1.05rem]">{para}</p>
                  ))}
                  {!content && <p className="text-[#ccc] italic">Nothing to preview yet...</p>}
                </div>
              ) : (
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder={`Write your article here...\n\nLeave a blank line between paragraphs.\n\nEach paragraph will be rendered separately on the article page.`}
                  required
                  rows={20}
                  className="w-full bg-white border border-[#e0e0e0] focus:border-[#c9a84c] outline-none px-4 py-4 text-[#444] text-sm leading-relaxed placeholder:text-[#ccc] resize-y transition-colors font-mono"
                />
              )}
            </div>

            {/* Error */}
            {status === "error" && (
              <div className="flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">
                <AlertCircle size={16} />
                {errorMsg}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish */}
            <div className="bg-white border border-[#e0e0e0] p-6">
              <p className="text-[10px] uppercase tracking-widest text-[#999] mb-4">Publish</p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#c9a84c] text-black text-sm uppercase tracking-widest font-bold hover:bg-[#a8892e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  "Publishing..."
                ) : (
                  <><Send size={13} /> Publish Article</>
                )}
              </button>
              <p className="text-[10px] text-[#999] mt-3 leading-relaxed">
                The article will be saved and immediately visible on the Insights page.
              </p>
            </div>

            {/* Category */}
            <div className="bg-white border border-[#e0e0e0] p-6">
              <label className="block text-[10px] uppercase tracking-widest text-[#999] mb-3">Category *</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-[#f8f7f4] border border-[#e0e0e0] focus:border-[#c9a84c] outline-none px-3 py-2 text-sm text-[#0a0a0a] transition-colors"
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Tips */}
            <div className="bg-white border border-[#e0e0e0] p-6">
              <p className="text-[10px] uppercase tracking-widest text-[#c9a84c] font-bold mb-3">Writing Tips</p>
              <ul className="space-y-2 text-xs text-[#666] leading-relaxed">
                <li>• Aim for 400–800 words for a focused article</li>
                <li>• Start with the key takeaway</li>
                <li>• Use a blank line between each paragraph</li>
                <li>• Keep sentences under 25 words for readability</li>
                <li>• End with a clear call-to-action</li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
