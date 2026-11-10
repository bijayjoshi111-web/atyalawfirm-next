import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";

const words = ["Justice.", "Integrity.", "Excellence."];

export default function Hero() {
  return (
    <section className="relative min-h-[min(calc(100svh-5rem),60rem)] md:min-h-[min(calc(100svh-6rem),60rem)] flex flex-col bg-[#472e18] text-[#f2e7dc] overflow-hidden">
      {/* Soft light + vertical rule lines */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 20%, rgba(166,131,101,0.28), transparent 60%), radial-gradient(ellipse 60% 50% at 0% 100%, rgba(0,0,0,0.35), transparent 70%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 pointer-events-none hidden md:grid grid-cols-4 px-8">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="border-l border-[#f2e7dc]/[0.07] last:border-r" />
        ))}
      </div>

      <div className="relative flex-1 flex flex-col justify-end px-6 md:px-8 pt-24 pb-14 md:pb-20 max-w-[1440px] w-full mx-auto">
        <p className="eyebrow text-[#a68365] mb-8 rise" style={{ animationDelay: "100ms" }}>
          Advocates &amp; Legal Consultants · Kathmandu, Nepal
        </p>

        <h1 className="font-display text-[3.5rem] sm:text-7xl md:text-8xl lg:text-[8.5rem] leading-[0.9] tracking-[-0.02em]">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden pb-[0.06em]">
              <span
                className={`block rise ${i === 1 ? "italic text-[#a68365]" : ""}`}
                style={{ animationDelay: `${250 + i * 150}ms` }}
              >
                {w}
              </span>
            </span>
          ))}
        </h1>

        <div className="mt-12 md:mt-16 pt-8 border-t border-[#f2e7dc]/20 grid md:grid-cols-[1fr_auto] gap-8 items-end rise" style={{ animationDelay: "800ms" }}>
          <p className="text-[#f2e7dc]/70 text-base md:text-lg leading-relaxed max-w-xl">
            A full-service law firm providing exceptional legal counsel with dedication and
            professionalism — for individuals, families and businesses since 2020.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-3 bg-[#a68365] text-white px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#8c6c50] transition-colors"
            >
              Our Services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 border border-[#f2e7dc]/40 text-[#f2e7dc] px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#f2e7dc] hover:text-[#472e18] transition-colors"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      <a
        href="#stats"
        className="relative self-start ml-6 md:ml-8 mb-8 inline-flex items-center gap-3 text-[#f2e7dc]/60 hover:text-[#f2e7dc] text-[0.6875rem] uppercase tracking-[0.25em] transition-colors"
      >
        <ArrowDown size={14} className="animate-bounce" /> Scroll down
      </a>
    </section>
  );
}
