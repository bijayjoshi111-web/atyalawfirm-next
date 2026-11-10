import type { Metadata } from "next";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Atya Law Firm",
  description: "Get in touch with Atya Law Firm. Schedule a consultation, visit our office, or reach us by phone or email. We're here to help.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Atya Law Firm",
    description: "Get in touch with Atya Law Firm. Schedule a consultation, visit our office, or reach us by phone or email. We're here to help.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#472e18] pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <p className="eyebrow text-[#a68365] mb-6">Get in Touch</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-[#f2e7dc] leading-[0.9]">Contact Us</h1>
          <div className="h-px bg-[#f2e7dc]/20 mt-12" />
          <p className="text-white/50 mt-6 max-w-xl leading-relaxed">
            Reach out to schedule a consultation. All enquiries are confidential.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <AnimateOnScroll direction="left">
            <div>
              <p className="eyebrow text-[#a68365] mb-6">Our Office</p>
              <h2 className="font-display text-4xl text-[#1f1f1f] mb-6">
                Let&apos;s Start a Conversation
              </h2>
              <div className="w-12 h-[2px] bg-[#a68365] mb-8" />
              <p className="text-[#666] leading-relaxed mb-10">
                Whether you need urgent legal advice or want to discuss a complex matter, our team is ready to help. All initial consultations are confidential and obligation-free.
              </p>

              <div className="space-y-6 mb-10">
                {[
                  { icon: MapPin, label: "Address", value: "Gautam Buddha Marg\nKathmandu, 44600, Bagmati, Nepal", href: "https://www.google.com/maps/search/Gautam+Buddha+Marg,+Kathmandu,+44600,+Bagmati,+Nepal" },
                  { icon: Phone, label: "Phone", value: "+977 9808450958", href: "tel:+9779808450958" },
                  { icon: Mail, label: "Email", value: "info@atyalaw.com", href: "mailto:info@atyalaw.com" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri: 9:00 AM – 6:00 PM\nSat: 10:00 AM – 2:00 PM" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 items-start group">
                    <div className="w-12 h-12 bg-[#472e18] flex items-center justify-center shrink-0 group-hover:bg-[#a68365] transition-colors">
                      <Icon size={16} className="text-[#a68365] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-[#999] mb-1">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-[#1f1f1f] hover:text-[#a68365] transition-colors whitespace-pre-line text-sm">{value}</a>
                      ) : (
                        <p className="text-[#1f1f1f] whitespace-pre-line text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <a
                href="https://www.google.com/maps/search/Gautam+Buddha+Marg,+Kathmandu,+44600,+Bagmati,+Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#f2e7dc] border border-[#e6dace] h-48 flex items-center justify-center hover:border-[#a68365] transition-colors group"
              >
                <div className="text-center">
                  <MapPin size={28} className="text-[#a68365] mx-auto mb-2" />
                  <p className="text-[#999] text-sm group-hover:text-[#a68365] transition-colors">Gautam Buddha Marg</p>
                  <p className="text-[#999] text-xs">Kathmandu, 44600, Bagmati, Nepal</p>
                  <p className="text-[#a68365] text-xs mt-2 underline">View on Google Maps →</p>
                </div>
              </a>
            </div>
          </AnimateOnScroll>

          {/* Form */}
          <AnimateOnScroll direction="right" delay={200}>
            <ContactForm />
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
