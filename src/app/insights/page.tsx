import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTA from "@/components/home/CTA";
import { Calendar, ArrowRight, PenLine, Settings } from "lucide-react";
import posts from "@/data/posts.json";

export const metadata: Metadata = {
  title: "Insights | Atya Law Firm",
  description: "Stay informed with legal insights, analysis, and updates from the attorneys at Atya Law Firm covering corporate law, tax, IP, litigation, and more.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Insights | Atya Law Firm",
    description: "Stay informed with legal insights, analysis, and updates from the attorneys at Atya Law Firm covering corporate law, tax, IP, litigation, and more.",
    url: "/insights",
  },
};

export default function InsightsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent" />
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-4">Knowledge Center</p>
            <h1 className="font-display text-5xl md:text-6xl text-white">Insights & News</h1>
            <div className="w-12 h-[2px] bg-[#c9a84c] mt-6" />
            <p className="text-white/50 mt-6 max-w-xl leading-relaxed">
              Legal analysis, industry updates, and expert perspectives from the Atya Law Firm team.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start md:self-auto">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#c9a84c]/50 text-[#c9a84c] text-xs uppercase tracking-widest hover:bg-[#c9a84c] hover:text-black transition-colors whitespace-nowrap"
            >
              <PenLine size={13} /> Submit Article
            </Link>
            <Link
              href="/admin/write"
              className="inline-flex items-center gap-2 px-4 py-3 border border-white/20 text-white/40 text-xs uppercase tracking-widest hover:border-white/40 hover:text-white/60 transition-colors whitespace-nowrap"
              title="Admin"
            >
              <Settings size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured */}
          <AnimateOnScroll direction="up">
            <Link
              href={`/insights/${posts[0].slug}`}
              className="grid md:grid-cols-2 gap-0 border border-[#e0e0e0] mb-12 group hover:border-[#c9a84c] transition-colors overflow-hidden"
            >
              <div className="bg-[#0a0a0a] min-h-[300px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#c9a84c] rotate-45" />
                </div>
                <span className="font-display text-[#c9a84c]/20 text-8xl font-bold relative z-10">01</span>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#c9a84c] text-[10px] uppercase tracking-[0.2em] font-bold bg-[#c9a84c]/10 px-3 py-1">
                    {posts[0].category}
                  </span>
                  <span className="flex items-center gap-1 text-[#999] text-xs">
                    <Calendar size={11} /> {posts[0].date}
                  </span>
                </div>
                <h2 className="font-display text-3xl text-[#0a0a0a] mb-4 group-hover:text-[#c9a84c] transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-[#666] leading-relaxed mb-6">{posts[0].excerpt}</p>
                <span className="group/link inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#0a0a0a] group-hover:text-[#c9a84c] transition-colors">
                  Read Full Article <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </AnimateOnScroll>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {posts.slice(1).map((post, i) => (
              <AnimateOnScroll key={post.slug} delay={i * 80} direction="up">
                <Link href={`/insights/${post.slug}`}>
                  <article className="group border border-[#e0e0e0] hover:border-[#c9a84c] transition-colors overflow-hidden h-full">
                    <div className="h-1 bg-[#f0ede8] group-hover:bg-[#c9a84c] transition-colors" />
                    <div className="p-7">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#c9a84c] text-[10px] uppercase tracking-[0.2em] font-bold">{post.category}</span>
                        <span className="flex items-center gap-1 text-[#999] text-xs">
                          <Calendar size={11} /> {post.date}
                        </span>
                      </div>
                      <h3 className="font-display text-xl text-[#0a0a0a] mb-3 leading-snug group-hover:text-[#c9a84c] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[#666] text-sm leading-relaxed mb-5">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#0a0a0a] group-hover:text-[#c9a84c] transition-colors">
                        Read More <ArrowRight size={11} />
                      </span>
                    </div>
                  </article>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
