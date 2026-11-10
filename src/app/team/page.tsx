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
      <section className="bg-[#472e18] pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="eyebrow text-[#a68365] mb-6">Our People</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#f2e7dc] leading-[0.9]">Meet the Team</h1>
          <div className="h-px bg-[#f2e7dc]/20 mt-12" />
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
              <AnimateOnScroll key={attorney.name} delay={i * 60} direction="up" className="h-full">
                <div className="group border border-[#e6dace] hover:border-[#a68365] hover:shadow-lg transition-all overflow-hidden flex flex-col h-full">
                  {/* Photo */}
                  <div className="bg-[#472e18] h-52 flex items-center justify-center relative overflow-hidden shrink-0">
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
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#a68365] rotate-45" />
                        </div>
                        <div className="relative z-10 text-center">
                          <div className="font-display text-4xl text-[#a68365]">{attorney.initials}</div>
                        </div>
                      </>
                    )}
                    {/* Social overlay */}
                    <div className="absolute inset-0 bg-[#a68365]/90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                      <a href="#" className="w-10 h-10 bg-black/20 flex items-center justify-center hover:bg-black/40 transition-colors">
                        <Mail size={15} className="text-white" />
                      </a>
                      <a href="#" className="w-10 h-10 bg-black/20 flex items-center justify-center hover:bg-black/40 transition-colors">
                        <Linkedin size={15} className="text-white" />
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-[#1f1f1f] mb-0.5">{attorney.name}</h3>
                    <p className="text-[#a68365] text-xs uppercase tracking-widest font-bold">{attorney.title}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team */}
      <section className="py-20 bg-[#f2e7dc] border-t border-[#e6dace]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <p className="eyebrow text-[#a68365] mb-6">Careers</p>
            <h2 className="font-display text-4xl text-[#1f1f1f] mb-4">Join Our Team</h2>
            <div className="w-12 h-[2px] bg-[#a68365] mx-auto mb-6" />
            <p className="text-[#666] leading-relaxed mb-8">
              We're always looking for talented, passionate attorneys who share our commitment to excellence and client service. If you believe in doing the law right, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@atyalaw.com"
              className="inline-flex items-center gap-3 bg-[#472e18] text-white px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold rounded-full hover:bg-[#a68365] hover:text-white transition-all"
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
