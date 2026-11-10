import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="bg-[#f2e7dc] py-24 md:py-36">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8">
        <AnimateOnScroll direction="up">
          <p className="eyebrow text-[#a68365] mb-6">Get Started</p>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#472e18] leading-[0.95]">
              Ready to discuss your <span className="italic text-[#a68365]">legal needs?</span>
            </h2>
            <div>
              <p className="text-[#1f1f1f]/70 leading-relaxed mb-8 max-w-md">
                Our attorneys are ready to provide strategic legal advice. The first consultation is
                always confidential and obligation-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#a68365] text-white px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#8c6c50] transition-colors"
                >
                  Schedule Consultation
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+9779808450958"
                  className="inline-flex items-center justify-center gap-3 border border-[#472e18]/30 text-[#472e18] px-7 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#472e18] hover:text-[#f2e7dc] transition-colors"
                >
                  <Phone size={14} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
