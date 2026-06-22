"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#why-us" },
  { label: "Projects", href: "#gallery" },
  { label: "Equipment", href: "#equipment" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-brand-black/95 backdrop-blur-md border-b border-white/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-gold flex items-center justify-center font-black text-brand-black text-lg">
              W
            </div>
            <div>
              <div className="text-white font-bold text-sm uppercase tracking-widest leading-tight group-hover:text-brand-gold transition-colors">
                Whitetail
              </div>
              <div className="text-brand-gold text-xs uppercase tracking-[0.2em] leading-tight">
                Management LLC
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/70 hover:text-brand-gold text-xs uppercase tracking-widest font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12259313738"
              className="text-brand-gold text-sm font-semibold tracking-wide hover:text-brand-gold-light transition-colors"
            >
              (225) 931-3738
            </a>
            <a href="#contact" className="btn-primary text-xs py-3 px-6">
              Free Estimate
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:text-brand-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-brand-charcoal/98 backdrop-blur-md border-t border-white/10 mt-3">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/80 hover:text-brand-gold text-sm uppercase tracking-widest font-medium transition-colors py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary w-full justify-center mt-4">
              Request Free Estimate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
