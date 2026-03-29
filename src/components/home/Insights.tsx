import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Calendar } from "lucide-react";
import allPosts from "@/data/posts.json";

const posts = allPosts.slice(0, 3);

export default function Insights() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <AnimateOnScroll>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-3">Knowledge Center</p>
              <h2 className="font-display text-4xl md:text-5xl text-[#0a0a0a]">
                Latest Insights
              </h2>
              <div className="w-12 h-[2px] bg-[#c9a84c] mt-5" />
            </div>
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#0a0a0a] font-bold border-b border-[#c9a84c] pb-1 hover:text-[#c9a84c] transition-colors"
            >
              All Insights <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <AnimateOnScroll key={post.slug} delay={i * 100} direction="up">
              <Link href={`/insights/${post.slug}`}>
                <article className="group border border-[#e0e0e0] hover:border-[#c9a84c] transition-colors overflow-hidden">
                  {/* Color bar */}
                  <div className="h-1 bg-[#f0ede8] group-hover:bg-[#c9a84c] transition-colors" />
                  <div className="p-7">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#c9a84c] text-[10px] uppercase tracking-[0.2em] font-bold">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-[#999] text-xs">
                        <Calendar size={11} /> {post.date}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-[#0a0a0a] mb-3 leading-snug group-hover:text-[#c9a84c] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[#666] text-sm leading-relaxed mb-5">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#0a0a0a] font-bold group-hover:text-[#c9a84c] transition-colors">
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
  );
}
