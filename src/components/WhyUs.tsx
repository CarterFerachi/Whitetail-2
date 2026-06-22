"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Shield,
  Clock,
  Trophy,
  Wrench,
  DollarSign,
  HardHat,
} from "lucide-react";

const benefits = [
  {
    icon: <Trophy size={24} />,
    title: "Experienced Operators",
    description:
      "Our certified operators bring decades of combined experience on every project type — residential, commercial, and municipal.",
  },
  {
    icon: <Wrench size={24} />,
    title: "Modern Equipment Fleet",
    description:
      "We run late-model, well-maintained machinery purpose-built for land clearing and site prep. The right tool for every job.",
  },
  {
    icon: <Shield size={24} />,
    title: "Licensed & Insured",
    description:
      "Fully licensed, bonded, and insured for your complete protection. We carry comprehensive liability and workers' comp coverage.",
  },
  {
    icon: <Clock size={24} />,
    title: "Fast Project Completion",
    description:
      "We mobilize quickly and work efficiently to keep your project timeline on track. No delays, no surprises.",
  },
  {
    icon: <DollarSign size={24} />,
    title: "Competitive Pricing",
    description:
      "Premium work at fair prices. We provide detailed, transparent quotes with no hidden fees — and we honor them.",
  },
  {
    icon: <HardHat size={24} />,
    title: "Safety-First Approach",
    description:
      "Every crew member follows strict safety protocols on every job. Our spotless safety record reflects our commitment to protecting people and property.",
  },
];

export default function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="why-us" className="py-32 bg-brand-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/3 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="section-label mb-6">Why Whitetail</p>
            <h2 className="section-title mb-8">
              Built on
              <br />
              <span className="text-gold-gradient">Results,</span>
              <br />
              Driven by Trust
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              When you hire Whitetail Management, you're getting more than
              equipment operators — you're getting a team of professionals who
              take ownership of your project from first consultation to final
              inspection.
            </p>
            <div className="section-divider mb-10" />
            <div className="space-y-4">
              {[
                "Family-owned & operated",
                "Serving residential & commercial clients",
                "Transparent estimates & billing",
                "On-time project delivery guarantee",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center flex-shrink-0">
                    <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                  </div>
                  <span className="text-white/70 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-brand-charcoal border border-white/5 hover:border-brand-gold/30 p-6 group transition-all duration-300 card-hover"
              >
                <div className="w-10 h-10 bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold mb-4 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-white text-sm font-bold mb-2 uppercase tracking-wide">
                  {benefit.title}
                </h3>
                <p className="text-white/40 text-xs leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
