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
            <div className="bg-[#472e18] h-[480px] w-full flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#a68365] rotate-45" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#a68365] rotate-45" />
              </div>
              <div className="text-center z-10">
                <div className="text-[#a68365] font-display text-6xl opacity-30">ALF</div>
                <p className="text-white/30 text-xs tracking-widest uppercase mt-2">Atya Law Firm</p>
              </div>
            </div>
            {/* Gold accent box */}
            <div className="absolute -bottom-6 right-0 md:-right-6 bg-[#a68365] p-8 text-white">
              <p className="font-display text-4xl leading-none">6</p>
              <p className="text-xs uppercase tracking-widest mt-1 font-bold">Years of<br/>Excellence</p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Text side */}
        <AnimateOnScroll direction="right" delay={200}>
          <div>
            <p className="eyebrow text-[#a68365] mb-6">About the Firm</p>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95] text-[#472e18] mb-6">
              A Legacy of Legal<br />
              <em>Excellence</em>
            </h2>
            <div className="w-12 h-[2px] bg-[#a68365] mb-6" />
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
                <div key={label} className="border border-[#e6dace] p-4 text-center group hover:border-[#a68365] transition-colors">
                  <Icon size={20} className="text-[#a68365] mx-auto mb-2" />
                  <span className="text-xs uppercase tracking-widest text-[#666]">{label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-[#1f1f1f] text-sm uppercase tracking-widest font-bold border-b-2 border-[#a68365] pb-1 hover:text-[#a68365] transition-colors"
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
