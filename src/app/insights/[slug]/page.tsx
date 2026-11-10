import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import CTA from "@/components/home/CTA";
import posts from "@/data/posts.json";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Atya Law Firm`,
    description: post.excerpt,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: `${post.title} | Atya Law Firm`,
      description: post.excerpt,
      url: `/insights/${slug}`,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const idx = posts.findIndex((p) => p.slug === slug);
  const prev = posts[idx + 1] ?? null;
  const next = posts[idx - 1] ?? null;

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      {/* Header */}
      <section className="bg-[#472e18] pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-[#a68365] text-xs uppercase tracking-widest mb-8 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft size={12} /> Back to Insights
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[#a68365] text-[10px] uppercase tracking-[0.25em] font-bold bg-[#a68365]/10 px-3 py-1">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-white/40 text-xs">
              <Calendar size={11} /> {post.date}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-white leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-white/50 text-lg leading-relaxed max-w-2xl">{post.excerpt}</p>
          <div className="w-12 h-[2px] bg-[#a68365] mt-8" />
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-[1fr_220px] gap-12">
            {/* Content */}
            <article className="prose prose-lg max-w-none">
              {paragraphs.map((para, i) => (
                <p key={i} className="text-[#444] leading-relaxed mb-6 text-[1.05rem]">
                  {para}
                </p>
              ))}
            </article>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="border border-[#e6dace] p-6">
                <p className="text-[10px] uppercase tracking-widest text-[#a68365] font-bold mb-3">Category</p>
                <div className="inline-flex items-center gap-2 text-sm text-[#1f1f1f]">
                  <Tag size={13} className="text-[#a68365]" />
                  {post.category}
                </div>
              </div>
              <div className="border border-[#e6dace] p-6">
                <p className="text-[10px] uppercase tracking-widest text-[#a68365] font-bold mb-3">Published</p>
                <p className="text-sm text-[#444]">{post.date}</p>
              </div>
              <div className="border border-[#a68365]/30 bg-[#a68365]/5 p-6">
                <p className="text-[10px] uppercase tracking-widest text-[#a68365] font-bold mb-3">Need Legal Advice?</p>
                <p className="text-xs text-[#666] leading-relaxed mb-4">
                  Our attorneys are available to discuss how these issues may affect you.
                </p>
                <Link
                  href="/contact"
                  className="block text-center py-2 bg-[#a68365] text-white text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[#8c6c50] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      {(prev || next) && (
        <section className="border-t border-[#e6dace] bg-white pb-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6">
              {prev && (
                <Link
                  href={`/insights/${prev.slug}`}
                  className="group border border-[#e6dace] hover:border-[#a68365] p-6 transition-colors"
                >
                  <p className="text-[10px] uppercase tracking-widest text-[#999] mb-2 flex items-center gap-1">
                    <ArrowLeft size={10} /> Previous
                  </p>
                  <p className="font-display text-[#1f1f1f] group-hover:text-[#a68365] transition-colors leading-snug">
                    {prev.title}
                  </p>
                </Link>
              )}
              {next && (
                <Link
                  href={`/insights/${next.slug}`}
                  className="group border border-[#e6dace] hover:border-[#a68365] p-6 transition-colors md:text-right md:ml-auto w-full"
                >
                  <p className="text-[10px] uppercase tracking-widest text-[#999] mb-2 flex items-center gap-1 md:justify-end">
                    Next <ArrowRight size={10} />
                  </p>
                  <p className="font-display text-[#1f1f1f] group-hover:text-[#a68365] transition-colors leading-snug">
                    {next.title}
                  </p>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
