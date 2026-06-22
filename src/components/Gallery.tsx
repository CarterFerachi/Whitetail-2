"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const categories = ["All", "Land Clearing", "Forestry Mulching", "Grading", "Demolition"];

interface GalleryItem {
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
  tag: string;
}

interface GalleryProps {
  images?: (string | undefined)[];
}

const defaultItems: GalleryItem[] = [
  {
    title: "5-Acre Residential Lot Clear",
    category: "Land Clearing",
    description: "Dense pine forest transformed into a build-ready lot in 3 days.",
    tag: "Residential",
  },
  {
    title: "Commercial Development Mulch",
    category: "Forestry Mulching",
    description: "12-acre site cleared and mulched for mixed-use development.",
    tag: "Commercial",
  },
  {
    title: "Industrial Pad Grading",
    category: "Grading",
    description: "Precision grading for 8-acre industrial warehouse pad.",
    tag: "Industrial",
  },
  {
    title: "Ranch Land Clearing",
    category: "Land Clearing",
    description: "40-acre pasture reclamation from overgrown scrub brush.",
    tag: "Agricultural",
  },
  {
    title: "Office Building Demolition",
    category: "Demolition",
    description: "Complete structural demolition and debris removal in 5 days.",
    tag: "Commercial",
  },
  {
    title: "Subdivision Site Prep",
    category: "Grading",
    description: "Full site preparation for 32-lot residential subdivision.",
    tag: "Residential",
  },
];

export default function Gallery({ images = [] }: GalleryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [activeCategory, setActiveCategory] = useState("All");

  const items = defaultItems.map((item, i) => ({
    ...item,
    imageUrl: images[i],
  }));

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((i) => i.category === activeCategory);

  return (
    <section id="gallery" className="py-32 bg-brand-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">Our Work</p>
          <h2 className="section-title mb-6">
            Proven Results,
            <br />
            <span className="text-gold-gradient">Real Projects</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
            Every project is a testament to our craft. See how we've transformed
            raw land across the region.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-widest font-semibold border transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-brand-gold text-brand-black border-brand-gold"
                  : "border-white/20 text-white/60 hover:border-brand-gold/50 hover:text-brand-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, i) => (
            <motion.div
              key={`${item.title}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden ${
                i === 0 ? "md:col-span-2 lg:col-span-2 md:row-span-1" : ""
              }`}
            >
              <div className={`relative w-full ${i === 0 ? "h-72 md:h-96" : "h-64"}`}>
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full bg-brand-dark flex items-center justify-center">
                    <div className="text-white/10 text-6xl font-black">
                      {item.category[0]}
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-widest px-3 py-1">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-brand-gold text-xs uppercase tracking-widest mb-1">
                    {item.category}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-1 group-hover:text-brand-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-outline">
            Start Your Project <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
