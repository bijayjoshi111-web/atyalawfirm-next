"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle, AlertCircle } from "lucide-react";

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

export default function SubmitArticlePage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [submitterName, setSubmitterName] = useState("");
  const [submitterEmail, setSubmitterEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, category, excerpt, content, submitterName, submitterEmail }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unknown error");
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
          <h1 className="font-display text-3xl text-white mb-3">Submission Received</h1>
          <p className="text-white/50 mb-2 leading-relaxed">
            Thank you for your article. Our team will review it and publish it if approved.
          </p>
          <p className="text-white/30 text-sm mb-8">You will be notified at the email you provided.</p>
          <Link
            href="/insights"
            className="inline-block px-6 py-3 border border-white/20 text-white text-sm uppercase tracking-widest hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
          >
            Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7f4]">
      {/* Header */}
      <div className="bg-[#0a0a0a] py-5 px-4 border-b border-white/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-white/50 text-xs uppercase tracking-widest hover:text-[#c9a84c] transition-colors"
          >
            <ArrowLeft size={12} /> Insights
          </Link>
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.25em] font-bold">Submit an Article</p>
          <div className="w-20" />
        </div>
      </div>

      {/* Notice */}
      <div className="bg-[#c9a84c]/10 border-b border-[#c9a84c]/20 py-3 px-4 text-center">
        <p className="text-[#8a6e28] text-xs uppercase tracking-widest">
          Articles are reviewed by our team before being published
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-[1fr_260px] gap-8">
          {/* Main */}
          <div className="space-y-6">
            {/* Author info */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#999] mb-2">Your Name *</label>
                <input
                  type="text"
                  value={submitterName}
                  onChange={(e) => setSubmitterName(e.target.value)}
                  placeholder="Full name"
                  required
                  className="w-full bg-white border border-[#e0e0e0] focus:border-[#c9a84c] outline-none px-4 py-3 text-[#0a0a0a] text-sm placeholder:text-[#ccc] transition-colors"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-widest text-[#999] mb-2">
                  Email <span className="text-[#ccc] normal-case tracking-normal">(optional — for notification)</span>
                </label>
                <input
                  type="email"
                  value={submitterEmail}
                  onChange={(e) => setSubmitterEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full bg-white border border-[#e0e0e0] focus:border-[#c9a84c] outline-none px-4 py-3 text-[#0a0a0a] text-sm placeholder:text-[#ccc] transition-colors"
                />
              </div>
            </div>

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
                Excerpt / Summary *{" "}
                <span className="text-[#ccc] normal-case tracking-normal">(1–2 sentences)</span>
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
              <label className="block text-[10px] uppercase tracking-widest text-[#999] mb-2">
                Article Body *{" "}
                <span className="text-[#ccc] normal-case tracking-normal">(separate paragraphs with a blank line)</span>
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={`Write your article here...\n\nLeave a blank line between paragraphs.`}
                required
                rows={20}
                className="w-full bg-white border border-[#e0e0e0] focus:border-[#c9a84c] outline-none px-4 py-4 text-[#444] text-sm leading-relaxed placeholder:text-[#ccc] resize-y transition-colors font-mono"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3 text-red-700 text-sm">
                <AlertCircle size={16} />
                {errorMsg}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white border border-[#e0e0e0] p-6">
              <p className="text-[10px] uppercase tracking-widest text-[#999] mb-4">Submit for Review</p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#c9a84c] text-black text-sm uppercase tracking-widest font-bold hover:bg-[#a8892e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Submitting..." : <><Send size={13} /> Submit Article</>}
              </button>
              <p className="text-[10px] text-[#999] mt-3 leading-relaxed">
                Your article will be reviewed by our team before going live. This typically takes 1–2 business days.
              </p>
            </div>

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

            <div className="bg-white border border-[#e0e0e0] p-6">
              <p className="text-[10px] uppercase tracking-widest text-[#c9a84c] font-bold mb-3">Guidelines</p>
              <ul className="space-y-2 text-xs text-[#666] leading-relaxed">
                <li>• Aim for 400–800 words</li>
                <li>• Focus on legal insights relevant to Nepal</li>
                <li>• Use a blank line between each paragraph</li>
                <li>• No promotional or advertising content</li>
                <li>• Original work only — no plagiarism</li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
