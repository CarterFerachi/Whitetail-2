"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const specs = [
  { label: "Excavators", value: "Cat 320–395 Series" },
  { label: "Forestry Mulchers", value: "FAE & Denis Cimaf" },
  { label: "Bulldozers", value: "Cat D6–D8 Series" },
  { label: "Motor Graders", value: "Precision GPS-Guided" },
  { label: "Track Loaders", value: "Cat 299 & 289 Series" },
  { label: "Dump Trucks", value: "18-Wheeler Capacity" },
];

const highlights = [
  "Late-model equipment — never outdated machines on your job",
  "GPS and laser-guided grading for engineering-grade precision",
  "Full maintenance program — zero equipment breakdowns mid-project",
  "Purpose-built attachments for every clearing condition",
];

interface EquipmentProps {
  imageUrl?: string;
}

export default function Equipment({ imageUrl }: EquipmentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="equipment" className="py-32 bg-brand-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header centered */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Our Fleet</p>
          <h2 className="section-title">
            The Right Equipment
            <br />
            <span className="text-gold-gradient">For Every Job</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] overflow-hidden">
              {imageUrl ? (
                <Image
                  src={imageUrl}
                  alt="Heavy equipment fleet"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-brand-charcoal flex items-center justify-center">
                  <span className="text-white/10 text-8xl font-black">⚙</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-black/30" />
            </div>
            {/* Gold frame accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-brand-gold/20 -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-gold" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-gold" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-white/50 text-base leading-relaxed mb-10">
              We invest in the industry's best heavy equipment so our crews can
              tackle any project with unmatched efficiency and precision. Our
              fleet is maintained to manufacturer standards and updated
              regularly.
            </p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className="border border-white/10 hover:border-brand-gold/30 p-4 transition-colors"
                >
                  <div className="text-brand-gold text-xs uppercase tracking-widest mb-1">
                    {spec.label}
                  </div>
                  <div className="text-white text-sm font-semibold">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <CheckCircle
                    size={16}
                    className="text-brand-gold mt-0.5 flex-shrink-0"
                  />
                  <span className="text-white/60 text-sm">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 bg-white/5"
        >
          {[
            { value: "20+", label: "Pieces of Equipment" },
            { value: "100%", label: "GPS-Guided Grading" },
            { value: "0", label: "Equipment Downtime" },
            { value: "48hr", label: "Mobilization Time" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-brand-charcoal p-8 text-center"
            >
              <div className="text-3xl font-black text-gold-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
