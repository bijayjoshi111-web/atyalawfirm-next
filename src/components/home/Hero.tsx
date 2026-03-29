"use client";
import Link from "next/link";
import { ArrowRight, Scale } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      if (lineRef.current) lineRef.current.style.width = "100%";
    }, 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center bg-[#0a0a0a] overflow-hidden">
      {/* Gold geometric accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 border border-[#c9a84c] rotate-45" />
        <div className="absolute top-20 right-20 w-72 h-72 border border-[#c9a84c] rotate-45" />
        <div className="absolute top-32 right-32 w-52 h-52 border border-[#c9a84c] rotate-45" />
      </div>
      <div className="absolute bottom-0 left-0 w-1/3 h-2/3 opacity-5">
        <div className="absolute bottom-10 left-10 w-80 h-80 border border-[#c9a84c] rotate-12" />
      </div>

      {/* Gold vertical line */}
      <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <Scale size={16} className="text-[#c9a84c]" />
            <span className="text-[#c9a84c] text-xs tracking-[0.4em] uppercase">Est. 1984 · New York</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-4">
            Justice.
            <br />
            <span className="text-[#c9a84c] italic">Integrity.</span>
            <br />
            Excellence.
          </h1>

          {/* Animated underline */}
          <div className="h-[2px] bg-white/10 my-8 relative overflow-hidden">
            <span
              ref={lineRef}
              className="absolute top-0 left-0 h-full bg-[#c9a84c] transition-all duration-1000"
              style={{ width: "0%" }}
            />
          </div>

          <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
            A premier full-service law firm committed to providing exceptional legal counsel.
            With over 40 years of experience, we fight for what matters most.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 bg-[#c9a84c] text-black px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-[#dbbf6e] transition-all"
            >
              Our Services
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 text-sm uppercase tracking-widest font-light hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
