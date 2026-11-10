import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const pages = [
  { label: "Home", href: "/" },
  { label: "About the Firm", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Meet the Team", href: "/team" },
  { label: "Insights & News", href: "/insights" },
  { label: "Contact Us", href: "/contact" },
];

const practice = ["Corporate Law", "Litigation", "Intellectual Property", "Real Estate", "Tax Law", "Family Law"];

const social = [
  { label: "Facebook", href: "https://www.facebook.com/atyalaw" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/atya-law-firm-1a0772301/" },
  { label: "TikTok", href: "https://www.tiktok.com/@atyalaw" },
];

const head = "font-body text-[#472e18] text-sm uppercase tracking-[0.1em] font-semibold mb-6";
const link =
  "group flex items-center justify-between gap-4 py-2.5 border-b border-white/20 text-white text-[0.8125rem] uppercase tracking-[0.1em] hover:text-[#472e18] transition-colors";

export default function Footer() {
  return (
    <footer className="bg-[#a68365] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-8 pt-20 pb-10">
        {/* Big wordmark + contact */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 pb-16 border-b border-white/25">
          <div>
            <p className="font-display text-6xl md:text-8xl leading-[0.9] text-white">Atya</p>
            <p className="eyebrow text-[#472e18] mt-3">Law Firm · Advocates &amp; Legal Consultants</p>
          </div>
          <ul className="space-y-5 text-white/90">
            <li className="flex gap-4 items-start">
              <MapPin size={18} className="text-[#472e18] mt-0.5 shrink-0" />
              <span className="leading-relaxed">Gautam Buddha Marg<br />Kathmandu 44600, Bagmati, Nepal</span>
            </li>
            <li className="flex gap-4 items-center">
              <Phone size={18} className="text-[#472e18] shrink-0" />
              <a href="tel:+9779808450958" className="hover:text-[#472e18] transition-colors">+977 9808450958</a>
            </li>
            <li className="flex gap-4 items-center">
              <Mail size={18} className="text-[#472e18] shrink-0" />
              <a href="mailto:info@atyalaw.com" className="hover:text-[#472e18] transition-colors">info@atyalaw.com</a>
            </li>
            <li className="text-sm text-white/75 pl-[34px]">
              Mon–Fri 8:00 AM – 6:00 PM · Sat–Sun 10:00 AM – 4:00 PM
            </li>
          </ul>
        </div>

        {/* Link columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1fr_1fr_0.6fr] gap-12 py-16">
          <div>
            <h4 className={head}>Pages</h4>
            {pages.map((p) => (
              <Link key={p.href} href={p.href} className={link}>
                {p.label}
                <ArrowRight size={14} className="text-white/40 group-hover:text-[#472e18] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
          <div>
            <h4 className={head}>Practice Areas</h4>
            {practice.map((a) => (
              <Link key={a} href="/services" className={link}>
                {a}
                <ArrowRight size={14} className="text-white/40 group-hover:text-[#472e18] group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
          <div>
            <h4 className={head}>Social</h4>
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={link}>
                {s.label}
                <ArrowRight size={14} className="-rotate-45 text-white/40 group-hover:text-[#472e18] transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/25 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/75">
          <p>© {new Date().getFullYear()} Atya Law Firm. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-[0.1em]">
            <Link href="#" className="hover:text-[#472e18] transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-[#472e18] transition-colors">Disclaimer</Link>
            <Link href="#" className="hover:text-[#472e18] transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
