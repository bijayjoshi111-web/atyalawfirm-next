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
      <section className="bg-[#472e18] pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-[#a68365] mb-6">Knowledge Center</p>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#f2e7dc] leading-[0.9]">Insights & News</h1>
            <div className="h-px bg-[#f2e7dc]/20 mt-12" />
            <p className="text-white/50 mt-6 max-w-xl leading-relaxed">
              Legal analysis, industry updates, and expert perspectives from the Atya Law Firm team.
            </p>
          </div>
          <div className="flex items-center gap-3 self-start md:self-auto">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#a68365]/50 text-[#a68365] text-xs uppercase tracking-widest hover:bg-[#a68365] hover:text-white transition-colors whitespace-nowrap"
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
              className="grid md:grid-cols-2 gap-0 border border-[#e6dace] mb-12 group hover:border-[#a68365] transition-colors overflow-hidden"
            >
              <div className="bg-[#472e18] min-h-[300px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#a68365] rotate-45" />
                </div>
                <span className="font-display text-[#a68365]/20 text-8xl relative z-10">01</span>
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#a68365] text-[10px] uppercase tracking-[0.2em] font-bold bg-[#a68365]/10 px-3 py-1">
                    {posts[0].category}
                  </span>
                  <span className="flex items-center gap-1 text-[#999] text-xs">
                    <Calendar size={11} /> {posts[0].date}
                  </span>
                </div>
                <h2 className="font-display text-3xl text-[#1f1f1f] mb-4 group-hover:text-[#a68365] transition-colors">
                  {posts[0].title}
                </h2>
                <p className="text-[#666] leading-relaxed mb-6">{posts[0].excerpt}</p>
                <span className="group/link inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#1f1f1f] group-hover:text-[#a68365] transition-colors">
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
                  <article className="group border border-[#e6dace] hover:border-[#a68365] transition-colors overflow-hidden h-full">
                    <div className="h-1 bg-[#e8d9c9] group-hover:bg-[#a68365] transition-colors" />
                    <div className="p-7">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[#a68365] text-[10px] uppercase tracking-[0.2em] font-bold">{post.category}</span>
                        <span className="flex items-center gap-1 text-[#999] text-xs">
                          <Calendar size={11} /> {post.date}
                        </span>
                      </div>
                      <h3 className="font-display text-xl text-[#1f1f1f] mb-3 leading-snug group-hover:text-[#a68365] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-[#666] text-sm leading-relaxed mb-5">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#1f1f1f] group-hover:text-[#a68365] transition-colors">
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
