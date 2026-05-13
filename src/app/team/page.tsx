import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTA from "@/components/home/CTA";
import { Mail, Linkedin } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team | Atya Law Firm",
  description: "Meet the experienced attorneys at Atya Law Firm — dedicated legal professionals committed to delivering exceptional results for every client.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team | Atya Law Firm",
    description: "Meet the experienced attorneys at Atya Law Firm — dedicated legal professionals committed to delivering exceptional results for every client.",
    url: "/team",
  },
};

const attorneys = [
  { name: "Anupam Bhattarai", title: "Founding Partner", specialty: "", initials: "AB", photo: "/team/anupam.jpeg" },
  { name: "Ashruti Nepal", title: "Partner", specialty: "", initials: "AS", photo: "/team/ashruti.jpeg" },
  { name: "Sarvendra Purush Dhakal", title: "Partner", specialty: "", initials: "SD", photo: "/team/sarvendra.jpeg" },
  { name: "Manish Dahal", title: "Managing Partner", specialty: "", initials: "MD", photo: "/team/manish.jpeg" },
];

export default function TeamPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#0a0a0a] py-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent" />
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-4">Our People</p>
          <h1 className="font-display text-5xl md:text-6xl text-white">Meet the Team</h1>
          <div className="w-12 h-[2px] bg-[#c9a84c] mt-6" />
          <p className="text-white/50 mt-6 max-w-xl leading-relaxed">
            Our attorneys bring elite credentials, deep experience, and genuine passion for the law.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {attorneys.map((attorney, i) => (
              <AnimateOnScroll key={attorney.name} delay={i * 60} direction="up">
                <div className="group border border-[#e0e0e0] hover:border-[#c9a84c] hover:shadow-lg transition-all overflow-hidden">
                  {/* Photo */}
                  <div className="bg-[#0a0a0a] h-52 flex items-center justify-center relative overflow-hidden">
                    {attorney.photo ? (
                      <Image
                        src={attorney.photo}
                        alt={attorney.name}
                        fill
                        className="object-cover object-top"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#c9a84c] rotate-45" />
                        </div>
                        <div className="relative z-10 text-center">
                          <div className="font-display text-4xl text-[#c9a84c] font-bold">{attorney.initials}</div>
                        </div>
                      </>
                    )}
                    {/* Social overlay */}
                    <div className="absolute inset-0 bg-[#c9a84c]/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <a href="#" className="w-10 h-10 bg-black/20 flex items-center justify-center hover:bg-black/40 transition-colors">
                        <Mail size={15} className="text-black" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-black/20 flex items-center justify-center hover:bg-black/40 transition-colors">
                        <Linkedin size={15} className="text-black" />
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-[#0a0a0a] mb-0.5">{attorney.name}</h3>
                    <p className="text-[#c9a84c] text-xs uppercase tracking-widest font-bold">{attorney.title}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team */}
      <section className="py-20 bg-[#f9f7f4] border-t border-[#e0e0e0]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <p className="text-[#c9a84c] text-xs uppercase tracking-[0.3em] mb-4">Careers</p>
            <h2 className="font-display text-4xl text-[#0a0a0a] mb-4">Join Our Team</h2>
            <div className="w-12 h-[2px] bg-[#c9a84c] mx-auto mb-6" />
            <p className="text-[#666] leading-relaxed mb-8">
              We're always looking for talented, passionate attorneys who share our commitment to excellence and client service. If you believe in doing the law right, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@atyalaw.com"
              className="inline-flex items-center gap-3 bg-[#0a0a0a] text-white px-8 py-4 text-sm uppercase tracking-widest font-bold hover:bg-[#c9a84c] hover:text-black transition-all"
            >
              View Open Positions
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      <CTA />
    </>
  );
}
