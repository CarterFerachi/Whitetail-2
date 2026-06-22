"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Axe, Trees, Layers, Building2, Hammer, ArrowRight } from "lucide-react";
import Image from "next/image";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  imageUrl?: string;
  href?: string;
}

const services: Service[] = [
  {
    icon: <Trees size={28} />,
    title: "Land Clearing",
    description:
      "Remove trees, brush, vegetation, and obstacles to prepare your property for development. We handle everything from small residential lots to large-scale commercial sites.",
    benefits: [
      "Full tree removal & stump grinding",
      "Brush & vegetation clearing",
      "Debris hauling & disposal",
      "Property line clearing",
    ],
  },
  {
    icon: <Axe size={28} />,
    title: "Forestry Mulching",
    description:
      "Environmentally friendly vegetation management that converts trees and brush into nutrient-rich mulch in a single pass — faster, cleaner, and more cost-effective.",
    benefits: [
      "Single-pass efficiency",
      "Soil erosion prevention",
      "No debris hauling required",
      "Eco-friendly land management",
    ],
  },
  {
    icon: <Layers size={28} />,
    title: "Grading",
    description:
      "Precision grading for proper drainage, foundations, roads, and development projects. We achieve exact elevations using modern laser and GPS-guided equipment.",
    benefits: [
      "GPS-guided precision",
      "Drainage optimization",
      "Road & pad construction",
      "Foundation prep",
    ],
  },
  {
    icon: <Building2 size={28} />,
    title: "Site Preparation",
    description:
      "Complete site readiness services for residential and commercial construction. From raw land to a fully prepped, build-ready site — we manage every step.",
    benefits: [
      "Full-service site prep",
      "Utility corridor clearing",
      "Erosion control",
      "Compaction & testing",
    ],
  },
  {
    icon: <Hammer size={28} />,
    title: "Demolition",
    description:
      "Safe and efficient removal of structures, concrete, debris, and unwanted improvements. We handle residential teardowns to commercial demolition projects.",
    benefits: [
      "Structural demolition",
      "Concrete & asphalt removal",
      "Debris hauling",
      "Hazardous material handling",
    ],
  },
];

interface ServicesProps {
  images?: (string | undefined)[];
}

export default function Services({ images = [] }: ServicesProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="services" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C8973A 0px, #C8973A 1px, transparent 1px, transparent 60px)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
        >
          <div>
            <p className="section-label mb-4">What We Do</p>
            <h2 className="section-title">
              Full-Service
              <br />
              <span className="text-gold-gradient">Land Solutions</span>
            </h2>
          </div>
          <p className="text-white/50 max-w-sm md:text-right text-sm leading-relaxed">
            From raw acreage to build-ready sites, our expert crews and modern
            equipment fleet deliver results that exceed expectations.
          </p>
        </motion.div>

        {/* Service grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative bg-brand-charcoal gold-border card-hover overflow-hidden ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Image */}
              {images[i] && (
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={images[i]!}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/40 to-transparent" />
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div className="w-14 h-14 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  {service.icon}
                </div>

                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-8">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-xs text-white/60">
                      <div className="w-1 h-1 bg-brand-gold rounded-full flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="flex items-center gap-2 text-brand-gold text-xs uppercase tracking-widest font-semibold group-hover:gap-3 transition-all"
                >
                  Get a Quote <ArrowRight size={14} />
                </a>
              </div>

              {/* Gold accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-gold group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary">
            Request a Free Estimate <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
