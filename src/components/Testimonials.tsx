"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Real Estate Developer",
    company: "Stonewood Development Group",
    rating: 5,
    text: "Whitetail Management cleared and prepped a 15-acre site for us in record time. Their crew is professional, their equipment is top-notch, and the results were exactly what we needed. We've used them on three projects and will keep coming back.",
    initials: "MT",
  },
  {
    name: "Sarah K.",
    role: "Property Owner",
    company: "Residential Client",
    rating: 5,
    text: "I had 8 acres of thick Georgia forest that needed to be cleared for a home site. The Whitetail team gave me a fair quote, showed up on time, and delivered incredible results. The land looked completely transformed. Couldn't be happier.",
    initials: "SK",
  },
  {
    name: "James R.",
    role: "General Contractor",
    company: "Ridge Line Construction",
    rating: 5,
    text: "As a GC, I need land prep contractors I can trust to perform on schedule. Whitetail is my go-to crew. They communicate clearly, mobilize fast, and their grading work is precise. My engineers are always happy with their work.",
    initials: "JR",
  },
  {
    name: "Linda W.",
    role: "Ranch Owner",
    company: "Blue Oak Ranch",
    rating: 5,
    text: "We hired Whitetail to reclaim 40 acres of overgrown pasture. Their forestry mulcher handled the thick brush like it was nothing. The land was completely clean and ready in two days. Exceptional value and professionalism.",
    initials: "LW",
  },
  {
    name: "David C.",
    role: "Commercial Developer",
    company: "Summit Commercial Properties",
    rating: 5,
    text: "Whitetail handled a complex demolition and site prep job for our new retail center. Their safety protocols were excellent, they stayed on schedule, and the site was handed off exactly as spec'd. Highly recommend.",
    initials: "DC",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? testimonials.length - 1 : a - 1));
  const next = () => setActive((a) => (a === testimonials.length - 1 ? 0 : a + 1));

  return (
    <section id="testimonials" className="py-32 bg-brand-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-brand-gold/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="section-label mb-4">Client Stories</p>
          <h2 className="section-title">
            What Our Clients
            <br />
            <span className="text-gold-gradient">Are Saying</span>
          </h2>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-4xl mx-auto mb-16"
        >
          <div className="bg-brand-charcoal border border-brand-gold/20 p-10 md:p-16 relative">
            <Quote
              size={48}
              className="text-brand-gold/20 absolute top-8 left-8"
            />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(testimonials[active].rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-brand-gold fill-brand-gold"
                  />
                ))}
              </div>

              <motion.p
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 italic"
              >
                "{testimonials[active].text}"
              </motion.p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-gold text-brand-black font-bold flex items-center justify-center text-sm">
                    {testimonials[active].initials}
                  </div>
                  <div>
                    <div className="text-white font-bold">
                      {testimonials[active].name}
                    </div>
                    <div className="text-white/40 text-xs">
                      {testimonials[active].role} · {testimonials[active].company}
                    </div>
                  </div>
                </div>

                {/* Nav */}
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 border border-white/20 hover:border-brand-gold text-white hover:text-brand-gold transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 border border-white/20 hover:border-brand-gold text-white hover:text-brand-gold transition-colors flex items-center justify-center"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Gold accent */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
        </motion.div>

        {/* Thumbnail tabs */}
        <div className="flex justify-center gap-3 flex-wrap">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-10 h-10 text-xs font-bold transition-all duration-200 ${
                i === active
                  ? "bg-brand-gold text-brand-black"
                  : "bg-brand-charcoal text-white/40 hover:text-white border border-white/10 hover:border-white/30"
              }`}
            >
              {t.initials}
            </button>
          ))}
        </div>

        {/* Average rating bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="flex justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-brand-gold fill-brand-gold" />
            ))}
          </div>
          <p className="text-white/40 text-xs uppercase tracking-widest">
            5.0 Average Rating · 100+ Verified Reviews
          </p>
        </motion.div>
      </div>
    </section>
  );
}
