import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Scale, Gavel, Lightbulb, Home, BarChart2, Users, ArrowRight } from "lucide-react";

const areas = [
  {
    icon: Scale,
    title: "Corporate Law",
    desc: "Comprehensive legal services for businesses — from formation and governance to mergers, acquisitions, and compliance.",
  },
  {
    icon: Gavel,
    title: "Litigation",
    desc: "Aggressive, strategic representation in civil and commercial disputes at all levels of court.",
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property",
    desc: "Protecting your innovations, trademarks, copyrights, and trade secrets with expert IP counsel.",
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Full-service legal support for residential and commercial transactions, leasing, and disputes.",
  },
  {
    icon: BarChart2,
    title: "Tax Law",
    desc: "Strategic tax planning, compliance, and dispute resolution for individuals and corporations.",
  },
  {
    icon: Users,
    title: "Family Law",
    desc: "Compassionate, skilled representation in divorce, custody, adoption, and estate planning matters.",
  },
];

export default function PracticeAreas() {
  return (
    <section className="py-24 bg-[#f9f7f4]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <AnimateOnScroll direction="up">
          <div className="text-center mb-16">
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-3">What We Do</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#0a0a0a]">
              Practice Areas
            </h2>
            <div className="w-12 h-[2px] bg-[#c9a84c] mx-auto mt-5" />
          </div>
        </AnimateOnScroll>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#e0e0e0]">
          {areas.map((area, i) => (
            <AnimateOnScroll key={area.title} delay={i * 80} direction="up" className="border-b border-[#e0e0e0] border-r-0 md:border-r md:even:border-r-0 lg:even:border-r lg:[&:nth-child(3n)]:border-r-0">
              <Link
                href="/services"
                className="group block p-8 hover:bg-[#0a0a0a] transition-colors duration-300 relative overflow-hidden h-full"
              >
                {/* Gold top border on hover */}
                <span className="absolute top-0 left-0 w-0 h-[3px] bg-[#c9a84c] group-hover:w-full transition-all duration-300" />

                <area.icon
                  size={28}
                  className="text-[#c9a84c] mb-5 group-hover:scale-110 transition-transform"
                />
                <h3 className="font-display text-xl text-[#0a0a0a] group-hover:text-white mb-3 transition-colors">
                  {area.title}
                </h3>
                <p className="text-[#666] group-hover:text-white/60 text-sm leading-relaxed mb-5 transition-colors">
                  {area.desc}
                </p>
                <span className="flex items-center gap-2 text-[#c9a84c] text-xs uppercase tracking-widest font-bold">
                  Learn More
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={200}>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 border-2 border-[#0a0a0a] text-[#0a0a0a] px-8 py-3 text-sm uppercase tracking-widest font-bold hover:bg-[#0a0a0a] hover:text-white transition-all"
            >
              View All Services <ArrowRight size={14} />
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
