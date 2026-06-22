import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const services = [
  "Land Clearing",
  "Forestry Mulching",
  "Grading",
  "Site Preparation",
  "Demolition",
];

const quickLinks = [
  { label: "About", href: "#why-us" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-brand-gold flex items-center justify-center font-black text-brand-black text-lg">
                W
              </div>
              <div>
                <div className="text-white font-bold text-sm uppercase tracking-widest leading-tight">
                  Whitetail
                </div>
                <div className="text-brand-gold text-xs uppercase tracking-[0.2em] leading-tight">
                  Management LLC
                </div>
              </div>
            </Link>
            <p className="text-white/40 text-xs leading-relaxed mb-6">
              Transforming raw land into opportunity. Professional land clearing,
              forestry mulching, grading, and demolition services delivered with
              precision.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-brand-charcoal border border-white/10 hover:border-brand-gold flex items-center justify-center text-white/40 hover:text-brand-gold transition-all"
              >
                <Facebook size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-brand-charcoal border border-white/10 hover:border-brand-gold flex items-center justify-center text-white/40 hover:text-brand-gold transition-all"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/40 hover:text-brand-gold text-xs transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/40 hover:text-brand-gold text-xs transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+12259313738"
                className="flex items-center gap-3 text-white/40 hover:text-brand-gold transition-colors"
              >
                <Phone size={14} className="text-brand-gold flex-shrink-0" />
                <span className="text-xs">(225) 931-3738</span>
              </a>
              <a
                href="mailto:Whitetail.lm@gmail.com"
                className="flex items-center gap-3 text-white/40 hover:text-brand-gold transition-colors"
              >
                <Mail size={14} className="text-brand-gold flex-shrink-0" />
                <span className="text-xs">Whitetail.lm@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-white/40">
                <MapPin size={14} className="text-brand-gold flex-shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">
                  Albany, Louisiana
                  <br />
                  Southeast Louisiana
                </span>
              </div>
            </div>

            <div className="mt-6">
              <a href="#contact" className="btn-primary text-xs py-3 w-full justify-center">
                Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Whitetail Management LLC. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Licensed · Bonded · Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
