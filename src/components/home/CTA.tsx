import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-[#f9f7f4] border-t border-[#e0e0e0]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0a0a0a] relative overflow-hidden">
          {/* Gold accent lines */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c9a84c]" />
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#c9a84c]" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#c9a84c]" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#c9a84c]" />

          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/2 right-16 -translate-y-1/2 w-80 h-80 border border-[#c9a84c] rotate-45" />
          </div>

          <AnimateOnScroll direction="none">
            <div className="relative z-10 py-16 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-3">Get Started</p>
                <h2 className="font-display text-3xl md:text-4xl text-white leading-tight">
                  Ready to discuss your legal needs?
                </h2>
                <p className="text-white/50 text-sm mt-3 max-w-lg">
                  Our attorneys are ready to provide you with strategic legal advice. The first consultation is always confidential and obligation-free.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href="tel:+15550100"
                  className="group inline-flex items-center gap-3 border border-white/30 text-white px-7 py-4 text-sm uppercase tracking-widest hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all"
                >
                  <Phone size={14} /> Call Now
                </a>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 bg-[#c9a84c] text-black px-7 py-4 text-sm uppercase tracking-widest font-bold hover:bg-[#dbbf6e] transition-all"
                >
                  Schedule Consultation
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
