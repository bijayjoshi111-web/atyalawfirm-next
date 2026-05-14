import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Shield, Heart, Trophy, Lock } from "lucide-react";

const features = [
  {
    icon: Trophy,
    title: "Proven Track Record",
    desc: "Decades of courtroom victories and successful negotiations across all major practice areas.",
  },
  {
    icon: Heart,
    title: "Client-First Approach",
    desc: "We listen before we act. Your goals drive our strategy — always.",
  },
  {
    icon: Shield,
    title: "Experienced Team",
    desc: "5+ attorneys with elite law school credentials and deep practical expertise.",
  },
  {
    icon: Lock,
    title: "Absolute Confidentiality",
    desc: "Your matters are handled with the highest levels of discretion and professional ethics.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white rotate-45"
            style={{
              width: `${200 + i * 80}px`,
              height: `${200 + i * 80}px`,
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${45 + i * 10}deg)`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <AnimateOnScroll>
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-3">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              The Atya Difference
            </h2>
            <div className="w-12 h-[2px] bg-[#c9a84c] mx-auto mt-5" />
          </div>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {features.map((f, i) => (
            <AnimateOnScroll key={f.title} delay={i * 100} direction="up">
              <div className="group bg-[#0a0a0a] p-10 hover:bg-[#1a1a1a] transition-colors text-center">
                <div className="w-16 h-16 border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#c9a84c]/10 transition-colors">
                  <f.icon size={24} className="text-[#c9a84c]" />
                </div>
                <h3 className="font-display text-xl text-white mb-3">{f.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
