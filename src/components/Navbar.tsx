"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0a0a0a] text-white text-sm py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+9779808450958" className="flex items-center gap-2 hover:text-[#c9a84c] transition-colors">
              <Phone size={13} /> +977 9808450958
            </a>
            <a href="mailto:info@atyalaw.com" className="flex items-center gap-2 hover:text-[#c9a84c] transition-colors">
              <Mail size={13} /> info@atyalaw.com
            </a>
          </div>
          <div className="text-[#c9a84c] tracking-widest text-xs uppercase font-light">
            Serving with Dedication &amp; Professionalism
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-lg border-b border-[#e0e0e0]"
            : "bg-white border-b border-[#e0e0e0]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <Image src="/logo.jpeg" alt="Atya Law Firm" width={120} height={48} className="h-12 w-auto object-contain" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm tracking-wide uppercase font-light transition-colors relative group ${
                  pathname === link.href
                    ? "text-[#c9a84c]"
                    : "text-[#1a1a1a] hover:text-[#c9a84c]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-[2px] bg-[#c9a84c] transition-transform origin-left ${
                    pathname === link.href ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-[#c9a84c] text-black text-sm uppercase tracking-widest font-bold hover:bg-[#a8892e] transition-colors"
            >
              Consult
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-[#0a0a0a]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-[#0a0a0a] text-white overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-screen py-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col px-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-2 border-b border-white/10 text-sm uppercase tracking-widest ${
                  pathname === link.href ? "text-[#c9a84c]" : "text-white hover:text-[#c9a84c]"
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 py-3 text-center bg-[#c9a84c] text-black text-sm uppercase tracking-widest font-bold"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
