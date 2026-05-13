import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Award, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Image side */}
        <AnimateOnScroll direction="left">
          <div className="relative">
            {/* Main image placeholder */}
            <div className="bg-[#0a0a0a] h-[480px] w-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#c9a84c] rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#c9a84c] rotate-45" />
              </div>
              <div className="text-center z-10">
                <div className="text-[#c9a84c] font-display text-6xl font-bold opacity-30">AL</div>
                <p className="text-white/30 text-xs tracking-widest uppercase mt-2">Atya Law Firm</p>
              </div>
            </div>
            {/* Gold accent box */}
            <div className="absolute -bottom-6 right-0 md:-right-6 bg-[#c9a84c] p-8 text-black">
              <p className="font-display text-4xl font-bold leading-none">6</p>
              <p className="text-xs uppercase tracking-widest mt-1 font-bold">Years of<br/>Excellence</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Text side */}
        <AnimateOnScroll direction="right" delay={200}>
          <div>
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-4">About the Firm</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0a0a0a] leading-tight mb-6">
              A Legacy of Legal<br />
              <em>Excellence</em>
            </h2>
            <div className="w-12 h-[2px] bg-[#c9a84c] mb-6" />
            <p className="text-[#666] leading-relaxed mb-4">
              Founded in 2020, Atya Law Firm has grown to become one of the most trusted full-service law firms in the country. We combine deep legal expertise with a genuine commitment to our clients' success.
            </p>
            <p className="text-[#666] leading-relaxed mb-8">
              Our team of 5+ attorneys brings decades of experience across commercial, civil, and criminal law. We serve individuals, businesses, and institutions with the same unwavering dedication.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Award, label: "Award Winning" },
                { icon: Users, label: "Expert Team" },
                { icon: Globe, label: "Global Reach" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="border border-[#e0e0e0] p-4 text-center group hover:border-[#c9a84c] transition-colors">
                  <Icon size={20} className="text-[#c9a84c] mx-auto mb-2" />
                  <span className="text-xs uppercase tracking-widest text-[#666]">{label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-[#0a0a0a] text-sm uppercase tracking-widest font-bold border-b-2 border-[#c9a84c] pb-1 hover:text-[#c9a84c] transition-colors"
            >
              Learn More About Us
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
