"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, AlertCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    acreage: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const services = [
    "Land Clearing",
    "Forestry Mulching",
    "Grading",
    "Site Preparation",
    "Demolition",
    "Multiple Services",
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-brand-charcoal relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-brand-gold/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="section-label mb-4">Get In Touch</p>
          <h2 className="section-title mb-6">
            Let's Get Your
            <br />
            <span className="text-gold-gradient">Project Started</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-sm leading-relaxed">
            Request a free, no-obligation estimate. We'll review your project
            details and get back to you within one business day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Info cards */}
            {[
              {
                icon: <Phone size={20} />,
                label: "Phone",
                value: "(225) 931-3738",
                sub: "Mon–Sat 7am–6pm",
                href: "tel:+12259313738",
              },
              {
                icon: <Mail size={20} />,
                label: "Email",
                value: "Whitetail.lm@gmail.com",
                sub: "Response within 24 hours",
                href: "mailto:Whitetail.lm@gmail.com",
              },
              {
                icon: <MapPin size={20} />,
                label: "Location",
                value: "Albany, Louisiana",
                sub: "Serving Southeast Louisiana",
                href: "#",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-start gap-4 group p-5 border border-white/10 hover:border-brand-gold/40 transition-colors"
              >
                <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-brand-black transition-all flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-white/40 text-xs uppercase tracking-widest mb-1">
                    {item.label}
                  </div>
                  <div className="text-white font-semibold text-sm group-hover:text-brand-gold transition-colors">
                    {item.value}
                  </div>
                  <div className="text-white/40 text-xs mt-0.5">{item.sub}</div>
                </div>
              </a>
            ))}

            {/* Emergency box */}
            <div className="bg-brand-gold/10 border border-brand-gold/30 p-5">
              <div className="flex items-center gap-2 text-brand-gold mb-2">
                <AlertCircle size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Emergency Service
                </span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed mb-3">
                Storm damage or urgent land clearing? We offer emergency response
                for time-sensitive situations.
              </p>
              <a
                href="tel:+12259313738"
                className="text-brand-gold text-xs font-bold uppercase tracking-widest hover:text-brand-gold-light transition-colors"
              >
                Call Emergency Line →
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="bg-brand-black border border-brand-gold/30 p-16 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center mb-6">
                  <ArrowRight size={28} className="text-brand-gold" />
                </div>
                <h3 className="text-white text-2xl font-bold mb-3">
                  Request Received!
                </h3>
                <p className="text-white/50 text-sm max-w-sm">
                  Thanks for reaching out. A member of our team will review your
                  project details and contact you within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-brand-black border border-white/10 p-5 md:p-10 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full bg-brand-charcoal border border-white/10 focus:border-brand-gold text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                    />
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(225) 000-0000"
                      className="w-full bg-brand-charcoal border border-white/10 focus:border-brand-gold text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full bg-brand-charcoal border border-white/10 focus:border-brand-gold text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                      Service Needed *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-brand-charcoal border border-white/10 focus:border-brand-gold text-white text-sm px-4 py-3 outline-none transition-colors appearance-none"
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-brand-charcoal">
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                      Approximate Acreage
                    </label>
                    <input
                      type="text"
                      value={formData.acreage}
                      onChange={(e) => setFormData({ ...formData, acreage: e.target.value })}
                      placeholder="e.g. 5 acres"
                      className="w-full bg-brand-charcoal border border-white/10 focus:border-brand-gold text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/50 text-xs uppercase tracking-widest mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project — location, timeline, special requirements..."
                    className="w-full bg-brand-charcoal border border-white/10 focus:border-brand-gold text-white text-sm px-4 py-3 outline-none transition-colors placeholder:text-white/20 resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4 text-sm">
                  Request Free Estimate <ArrowRight size={16} />
                </button>

                <p className="text-white/30 text-xs text-center">
                  No obligation. We'll respond within 1 business day.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
