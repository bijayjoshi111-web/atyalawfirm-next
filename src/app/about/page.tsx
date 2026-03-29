import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTA from "@/components/home/CTA";
import { Award, Users, Globe, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Atya Law Firm",
  description: "Learn about Atya Law Firm — our history, mission, values, and the commitment to justice and excellence that has guided us for over 40 years.",
};

const timeline = [
  { year: "1984", title: "Founded", desc: "Atya Law Firm established by founding partners with a vision for client-first legal practice." },
  { year: "1992", title: "Expansion", desc: "Opened second office and added corporate law and tax practices to our portfolio." },
  { year: "2001", title: "Recognition", desc: "Named among the Top 50 Law Firms in the region by Legal Excellence Awards." },
  { year: "2010", title: "Growth", desc: "Grew to 30+ attorneys; launched our Intellectual Property and Technology practice." },
  { year: "2018", title: "Innovation", desc: "Established a dedicated pro bono program, providing free legal aid to underserved communities." },
  { year: "2024", title: "Today", desc: "50+ attorneys, 4 offices, Chambers & Partners ranked, serving clients across the globe." },
];

const values = [
  { icon: Scale, title: "Integrity", desc: "We hold ourselves to the highest ethical standards in every case, every day." },
  { icon: Award, title: "Excellence", desc: "We pursue the best possible outcome for our clients through diligent preparation and expert advocacy." },
  { icon: Users, title: "Collaboration", desc: "We work as a unified team, combining diverse expertise to serve every client's unique needs." },
  { icon: Globe, title: "Impact", desc: "We believe legal excellence should benefit society, not just those who can afford it." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent" />
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-4">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">About the Firm</h1>
          <div className="w-12 h-[2px] bg-[#c9a84c] mt-6" />
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <AnimateOnScroll direction="left">
            <div>
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-4">Who We Are</p>
              <h2 className="font-display text-4xl text-[#0a0a0a] mb-6">
                More Than a Law Firm
              </h2>
              <div className="w-12 h-[2px] bg-[#c9a84c] mb-6" />
              <p className="text-[#666] leading-relaxed mb-4">
                At Atya Law Firm, we don't just provide legal advice — we become trusted partners in our clients' success. Founded in 1984, our firm has built a reputation for delivering outstanding results through a combination of legal expertise, strategic thinking, and genuine dedication.
              </p>
              <p className="text-[#666] leading-relaxed mb-4">
                We are a full-service firm, meaning we handle every dimension of our clients' legal needs — from complex corporate transactions and high-stakes litigation to personal matters like estate planning and family law.
              </p>
              <p className="text-[#666] leading-relaxed">
                What sets us apart is our belief that every client deserves our absolute best — not just on the big cases, but on every matter we take on.
              </p>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll direction="right" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "40+", label: "Years of Practice" },
                { value: "500+", label: "Cases Won" },
                { value: "50+", label: "Expert Attorneys" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#f9f7f4] border border-[#e0e0e0] p-8 text-center hover:border-[#c9a84c] transition-colors">
                  <div className="font-display text-4xl text-[#c9a84c] font-bold">{stat.value}</div>
                  <div className="text-[#666] text-xs uppercase tracking-widest mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f9f7f4]">
        <div className="max-w-7xl mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-3">What We Stand For</p>
              <h2 className="font-display text-4xl text-[#0a0a0a]">Our Core Values</h2>
              <div className="w-12 h-[2px] bg-[#c9a84c] mx-auto mt-5" />
            </div>
          </AnimateOnScroll>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.title} delay={i * 80} direction="up">
                <div className="bg-white border border-[#e0e0e0] p-8 text-center group hover:border-[#c9a84c] hover:shadow-lg transition-all">
                  <div className="w-16 h-16 border border-[#c9a84c]/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-[#c9a84c] group-hover:border-[#c9a84c] transition-all">
                    <v.icon size={24} className="text-[#c9a84c] group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-display text-xl text-[#0a0a0a] mb-3">{v.title}</h3>
                  <p className="text-[#666] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <AnimateOnScroll>
            <div className="text-center mb-16">
              <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-3">Our Journey</p>
              <h2 className="font-display text-4xl text-[#0a0a0a]">Firm History</h2>
              <div className="w-12 h-[2px] bg-[#c9a84c] mx-auto mt-5" />
            </div>
          </AnimateOnScroll>
          <div className="relative">
            <div className="absolute left-[80px] top-0 bottom-0 w-[1px] bg-[#e0e0e0]" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <AnimateOnScroll key={item.year} delay={i * 80} direction="left">
                  <div className="flex gap-8 items-start">
                    <div className="w-20 shrink-0 text-right">
                      <span className="font-display text-[#c9a84c] font-bold text-lg">{item.year}</span>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-[2.5rem] top-1.5 w-3 h-3 bg-[#c9a84c] border-2 border-white" />
                      <h3 className="font-display text-xl text-[#0a0a0a] mb-1">{item.title}</h3>
                      <p className="text-[#666] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
