import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import CTA from "@/components/home/CTA";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Practice Areas | Atya Law Firm",
  description: "Atya Law Firm offers expert legal services across Corporate Law, Litigation, Intellectual Property, Real Estate, Tax Law, Family Law, Employment Law, and more.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Practice Areas | Atya Law Firm",
    description: "Atya Law Firm offers expert legal services across Corporate Law, Litigation, Intellectual Property, Real Estate, Tax Law, Family Law, Employment Law, and more.",
    url: "/services",
  },
};
import { Scale, Gavel, Lightbulb, Home, BarChart2, Users, ArrowRight, Building2, FileText, Globe } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Corporate Law",
    desc: "We advise businesses of all sizes — from startups to multinational corporations — on every aspect of their legal affairs. Our corporate team handles entity formation, governance, shareholder agreements, M&A transactions, joint ventures, and regulatory compliance.",
    areas: ["Mergers & Acquisitions", "Corporate Governance", "Securities Regulation", "Private Equity", "Joint Ventures", "Commercial Contracts"],
  },
  {
    icon: Gavel,
    title: "Litigation",
    desc: "Our litigation team is known for strategic, results-driven representation. We handle complex commercial disputes, class actions, arbitration, and appeals across federal and state courts. We're prepared to fight for you — in the courtroom and at the negotiating table.",
    areas: ["Commercial Disputes", "Class Actions", "Arbitration & Mediation", "Appeals", "Injunctions", "Contract Disputes"],
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property",
    desc: "Protecting your ideas is protecting your business. Our IP practice covers patents, trademarks, copyrights, trade secrets, and licensing. We work with innovators, creatives, and technology companies to secure and enforce their intellectual property rights.",
    areas: ["Patent Registration", "Trademark Protection", "Copyright Law", "Trade Secrets", "IP Licensing", "IP Litigation"],
  },
  {
    icon: Home,
    title: "Real Estate",
    desc: "Whether you're buying, selling, leasing, or developing, our real estate team provides full legal support for residential and commercial transactions. We handle everything from due diligence to closing, and represent clients in real estate disputes.",
    areas: ["Commercial Transactions", "Residential Conveyancing", "Lease Agreements", "Development Projects", "Real Estate Finance", "Property Disputes"],
  },
  {
    icon: BarChart2,
    title: "Tax Law",
    desc: "Our tax attorneys provide strategic planning and compliance advice to minimize tax exposure while staying fully compliant. We represent clients before the IRS and state tax authorities, and handle tax litigation when necessary.",
    areas: ["Corporate Tax Planning", "Personal Tax Strategy", "International Tax", "IRS Disputes", "Estate Tax", "Tax-Exempt Organizations"],
  },
  {
    icon: Users,
    title: "Family Law",
    desc: "We handle sensitive family legal matters with both skill and compassion. Our family law team guides clients through divorce, custody arrangements, adoption proceedings, and prenuptial agreements with care and professionalism.",
    areas: ["Divorce & Separation", "Child Custody", "Adoption", "Prenuptial Agreements", "Estate Planning", "Guardianship"],
  },
  {
    icon: Building2,
    title: "Employment Law",
    desc: "We represent both employers and employees in all aspects of employment law, from drafting workplace policies to resolving discrimination claims. Our team helps businesses stay compliant and helps individuals protect their rights.",
    areas: ["Employment Contracts", "Workplace Discrimination", "Wrongful Termination", "Non-Compete Agreements", "HR Policy", "EEOC Claims"],
  },
  {
    icon: FileText,
    title: "Bankruptcy & Restructuring",
    desc: "When facing financial distress, our team provides clear guidance through every option — from Chapter 11 restructuring to out-of-court workouts. We represent debtors, creditors, and trustees in complex insolvency matters.",
    areas: ["Chapter 11 Reorganization", "Chapter 7 Liquidation", "Debt Restructuring", "Creditor Rights", "Distressed M&A", "Insolvency Advisory"],
  },
  {
    icon: Globe,
    title: "International Law",
    desc: "Our international practice assists clients navigating cross-border transactions, foreign investment, and international disputes. We work with businesses expanding globally and foreign clients investing in the United States.",
    areas: ["Cross-Border Transactions", "Foreign Direct Investment", "International Arbitration", "Trade Compliance", "Sanctions", "Immigration for Business"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#472e18] pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="eyebrow text-[#a68365] mb-6">What We Do</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#f2e7dc] leading-[0.9]">Our Services</h1>
          <div className="h-px bg-[#f2e7dc]/20 mt-12" />
          <p className="text-white/50 mt-6 max-w-xl leading-relaxed">
            Full-service legal counsel across all major practice areas. Whatever your legal challenge, we have the expertise to help.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((service, i) => (
            <AnimateOnScroll key={service.title} delay={50} direction="up">
              <div className={`grid md:grid-cols-2 gap-12 items-start pb-16 border-b border-[#e6dace] last:border-0 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 bg-[#472e18] flex items-center justify-center">
                      <service.icon size={22} className="text-[#a68365]" />
                    </div>
                    <h2 className="font-display text-3xl text-[#1f1f1f]">{service.title}</h2>
                  </div>
                  <div className="w-10 h-[2px] bg-[#a68365] mb-5" />
                  <p className="text-[#666] leading-relaxed mb-6">{service.desc}</p>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-sm uppercase tracking-widest font-bold text-[#1f1f1f] border-b border-[#a68365] pb-1 hover:text-[#a68365] transition-colors"
                  >
                    Consult on this matter <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                <div className="bg-[#f2e7dc] border border-[#e6dace] p-8">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-[#a68365] font-bold mb-5">Practice Areas</h3>
                  <ul className="space-y-3">
                    {service.areas.map((area) => (
                      <li key={area} className="flex items-center gap-3 text-sm text-[#444]">
                        <span className="w-4 h-[1px] bg-[#a68365] inline-block shrink-0" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
