import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-4 flex flex-col leading-none">
            <span className="text-2xl font-serif tracking-widest text-white uppercase">Atya</span>
            <span className="text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase font-light">Law Firm</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-5">
            A premier full-service law firm committed to justice, integrity, and excellence since 2020.
          </p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/atyalaw" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-black transition-all">
              <Facebook size={15} />
            </a>
            <a href="https://www.linkedin.com/in/atya-law-firm-1a0772301/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-black transition-all">
              <Linkedin size={15} />
            </a>
            <a href="https://www.tiktok.com/@atyalaw" target="_blank" rel="noopener noreferrer" className="w-9 h-9 border border-white/20 flex items-center justify-center hover:bg-[#c9a84c] hover:border-[#c9a84c] hover:text-black transition-all">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.24 8.24 0 0 0 4.83 1.55V6.79a4.85 4.85 0 0 1-1.06-.1z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#c9a84c] text-xs uppercase tracking-[0.2em] mb-5 font-bold">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "About the Firm", href: "/about" },
              { label: "Our Services", href: "/services" },
              { label: "Meet the Team", href: "/team" },
              { label: "Insights & News", href: "/insights" },
              { label: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/60 text-sm hover:text-[#c9a84c] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-[1px] bg-[#c9a84c] inline-block group-hover:w-5 transition-all" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice Areas */}
        <div>
          <h4 className="text-[#c9a84c] text-xs uppercase tracking-[0.2em] mb-5 font-bold">Practice Areas</h4>
          <ul className="space-y-2">
            {[
              "Corporate Law",
              "Litigation",
              "Intellectual Property",
              "Real Estate",
              "Tax Law",
              "Family Law",
            ].map((area) => (
              <li key={area}>
                <Link
                  href="/services"
                  className="text-white/60 text-sm hover:text-[#c9a84c] transition-colors flex items-center gap-2 group"
                >
                  <span className="w-3 h-[1px] bg-[#c9a84c] inline-block group-hover:w-5 transition-all" />
                  {area}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#c9a84c] text-xs uppercase tracking-[0.2em] mb-5 font-bold">Contact</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <MapPin size={15} className="text-[#c9a84c] mt-0.5 shrink-0" />
              <span className="text-white/60 text-sm leading-relaxed">
                Gautam Buddha Marg<br />Kathmandu, 44600, Bagmati, Nepal
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={15} className="text-[#c9a84c] shrink-0" />
              <a href="tel:+9779808450958" className="text-white/60 text-sm hover:text-[#c9a84c] transition-colors">
                +977 9808450958
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={15} className="text-[#c9a84c] shrink-0" />
              <a href="mailto:info@atyalaw.com" className="text-white/60 text-sm hover:text-[#c9a84c] transition-colors">
                info@atyalaw.com.np
              </a>
            </li>
          </ul>
          <div className="mt-5 p-3 border border-white/10">
            <p className="text-xs text-white/40 uppercase tracking-widest mb-1">Office Hours</p>
            <p className="text-sm text-white/60">Mon–Fri: 8:00 AM – 6:00 PM</p>
            <p className="text-sm text-white/60">Sat-Sun: 10:00 AM – 4:00 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Atya Law Firm. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="#" className="hover:text-[#c9a84c] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#c9a84c] transition-colors">Disclaimer</Link>
            <Link href="#" className="hover:text-[#c9a84c] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
