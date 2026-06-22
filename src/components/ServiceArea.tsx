"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";

const areas = [
  "North Georgia",
  "Atlanta Metro",
  "South Carolina Upstate",
  "East Alabama",
  "Middle Tennessee",
  "Western North Carolina",
];

export default function ServiceArea() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-32 bg-brand-black relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C8973A" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-6">Where We Work</p>
            <h2 className="section-title mb-8">
              Serving Residential
              <br />
              <span className="text-gold-gradient">& Commercial</span>
              <br />
              Clients
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Based in the Southeast, we travel to serve property owners,
              developers, and contractors across a wide regional footprint. If
              your project is outside our typical area, call us — we can often
              accommodate.
            </p>

            {/* Area list */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              {areas.map((area, i) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-center gap-2 text-white/60 text-sm"
                >
                  <MapPin size={14} className="text-brand-gold flex-shrink-0" />
                  {area}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Check Your Area <ArrowRight size={16} />
              </a>
              <a
                href="tel:+15555551234"
                className="btn-outline flex items-center gap-2"
              >
                <Phone size={16} />
                Call Us Now
              </a>
            </div>
          </motion.div>

          {/* Right - stylized map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-brand-charcoal border border-brand-gold/20 p-8 relative overflow-hidden">
              {/* Stylized map placeholder */}
              <div className="relative h-80">
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Abstract state outline */}
                  <path
                    d="M 50 80 L 120 60 L 200 70 L 280 50 L 350 80 L 360 150 L 320 200 L 280 220 L 200 230 L 120 210 L 60 180 L 40 130 Z"
                    fill="none"
                    stroke="#C8973A"
                    strokeWidth="1"
                    opacity="0.4"
                  />
                  {/* Service area dots */}
                  {[
                    { x: 200, y: 130, label: "HQ", primary: true },
                    { x: 160, y: 100, label: "N. Georgia" },
                    { x: 230, y: 90, label: "SC" },
                    { x: 130, y: 150, label: "Alabama" },
                    { x: 270, y: 140, label: "NC" },
                    { x: 200, y: 170, label: "Atlanta" },
                    { x: 170, y: 60, label: "Tennessee" },
                  ].map((dot) => (
                    <g key={dot.label}>
                      <circle
                        cx={dot.x}
                        cy={dot.y}
                        r={dot.primary ? 8 : 5}
                        fill={dot.primary ? "#C8973A" : "#C8973A"}
                        opacity={dot.primary ? 1 : 0.5}
                      />
                      {dot.primary && (
                        <circle
                          cx={dot.x}
                          cy={dot.y}
                          r={16}
                          fill="none"
                          stroke="#C8973A"
                          strokeWidth="1"
                          opacity="0.3"
                        />
                      )}
                      <text
                        x={dot.x + 12}
                        y={dot.y + 4}
                        fill="#9CA3AF"
                        fontSize="10"
                        fontFamily="system-ui"
                      >
                        {dot.label}
                      </text>
                    </g>
                  ))}
                  {/* Connection lines */}
                  <line x1="200" y1="130" x2="160" y2="100" stroke="#C8973A" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,4" />
                  <line x1="200" y1="130" x2="230" y2="90" stroke="#C8973A" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,4" />
                  <line x1="200" y1="130" x2="130" y2="150" stroke="#C8973A" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,4" />
                  <line x1="200" y1="130" x2="270" y2="140" stroke="#C8973A" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,4" />
                  <line x1="200" y1="130" x2="200" y2="170" stroke="#C8973A" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,4" />
                  <line x1="200" y1="130" x2="170" y2="60" stroke="#C8973A" strokeWidth="0.5" opacity="0.3" strokeDasharray="4,4" />
                </svg>
              </div>

              {/* Stat */}
              <div className="border-t border-white/10 pt-6 flex justify-between items-center">
                <div>
                  <div className="text-2xl font-black text-gold-gradient">6+</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">
                    Regional Markets
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-gold-gradient">500mi</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">
                    Service Radius
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-black text-gold-gradient">Any</div>
                  <div className="text-white/40 text-xs uppercase tracking-widest">
                    Project Size
                  </div>
                </div>
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-brand-gold" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-brand-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
