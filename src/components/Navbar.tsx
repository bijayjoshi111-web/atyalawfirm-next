"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

function Wordmark() {
  return (
    <Link href="/" className="flex flex-col leading-none text-[#f2e7dc]" aria-label="Atya Law Firm — home">
      <span className="font-display text-[1.75rem] tracking-[0.04em]">Atya</span>
      <span className="text-[0.625rem] tracking-[0.35em] uppercase text-[#a68365] mt-1">Law Firm</span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header
      className={`sticky top-0 z-50 bg-[#472e18] border-b border-[#f2e7dc]/20 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_8px_30px_rgba(0,0,0,0.25)]" : ""
      }`}
    >
      <div className="flex items-stretch justify-between h-20 md:h-24 pl-4 md:pl-8">
        <div className="flex items-center mr-auto">
          <Wordmark />
        </div>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-8 pr-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-xs uppercase tracking-[0.2em] font-medium py-2 transition-colors ${
                isActive(link.href) ? "text-[#a68365]" : "text-[#f2e7dc]/80 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute left-0 right-0 -bottom-0.5 h-px bg-[#a68365] origin-left transition-transform duration-300 ${
                  isActive(link.href) ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center pl-8 pr-8 border-l border-[#f2e7dc]/20">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#a68365] text-white px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#8c6c50] transition-colors"
          >
            Consult <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Menu button (mobile / tablet) */}
        <button
          className="lg:hidden flex items-center gap-4 px-6 md:px-8 border-l border-[#f2e7dc]/20 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="text-xs uppercase tracking-[0.2em] font-medium">{menuOpen ? "Close" : "Menu"}</span>
          <span className="relative w-6 h-3">
            <span className={`absolute right-0 h-px bg-current transition-all duration-300 ${menuOpen ? "top-1.5 w-6 rotate-45" : "top-0 w-6"}`} />
            <span className={`absolute right-0 h-px bg-current transition-all duration-300 ${menuOpen ? "top-1.5 w-6 -rotate-45" : "top-3 w-4"}`} />
          </span>
        </button>
      </div>

      {/* Full-screen menu overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 md:top-24 bottom-0 bg-[#472e18] transition-[opacity,visibility] duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="h-full overflow-y-auto px-6 md:px-8 py-10 flex flex-col">
          <p className="eyebrow text-[#a68365] mb-6">Menu</p>
          <nav className="flex flex-col">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" }}
                className={`font-display text-4xl md:text-5xl py-3 border-b border-[#f2e7dc]/15 transition-all duration-500 ${
                  menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                } ${isActive(link.href) ? "text-[#a68365]" : "text-[#f2e7dc] hover:text-[#a68365]"}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-10 space-y-3 text-sm text-[#f2e7dc]/70">
            <a href="tel:+9779808450958" className="flex items-center gap-3 hover:text-white">
              <Phone size={14} className="text-[#a68365]" /> +977 9808450958
            </a>
            <a href="mailto:info@atyalaw.com" className="flex items-center gap-3 hover:text-white">
              <Mail size={14} className="text-[#a68365]" /> info@atyalaw.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
