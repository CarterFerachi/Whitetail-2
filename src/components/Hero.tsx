"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import Image from "next/image";

interface HeroProps {
  heroImageUrl?: string;
}

export default function Hero({ heroImageUrl }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {heroImageUrl ? (
          <Image
            src={heroImageUrl}
            alt="Land clearing excavator at work"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-charcoal via-brand-dark to-brand-black" />
        )}
        {/* Cinematic overlay */}
        <div className="absolute inset-0 hero-video-overlay" />
        {/* Top gradient */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-brand-black/60 to-transparent" />
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-brand-black to-transparent" />
        {/* Left vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/50 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 md:pt-24">
        <div className="max-w-4xl">
          {/* Label */}
          <div
            className={`flex items-center gap-3 mb-8 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="w-8 h-px bg-brand-gold" />
            <span className="section-label">Whitetail Management LLC</span>
          </div>

          {/* Headline */}
          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Transforming
            <br />
            <span className="text-gold-gradient">Raw Land</span>
            <br />
            Into Opportunity
          </h1>

          {/* Subheadline */}
          <p
            className={`text-white/70 text-base md:text-xl max-w-2xl leading-relaxed mb-8 md:mb-12 transition-all duration-1000 delay-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Professional land clearing, forestry mulching, grading, site
            preparation, and demolition services delivered with precision and
            reliability.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-1000 delay-[600ms] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <a href="#contact" className="btn-primary group">
              Request a Free Estimate
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a href="#gallery" className="btn-outline group">
              <Play size={16} className="fill-current" />
              View Our Work
            </a>
          </div>

          {/* Stats */}
          <div
            className={`flex flex-wrap gap-6 md:gap-8 mt-10 pt-10 md:mt-16 md:pt-16 border-t border-white/10 transition-all duration-1000 delay-[800ms] ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {[
              { value: "100+", label: "Projects Completed" },
              { value: "7+", label: "Years Experience" },
              { value: "100%", label: "Licensed & Insured" },
              { value: "24/7", label: "Emergency Response" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-gold-gradient">
                  {stat.value}
                </span>
                <span className="text-white/50 text-xs uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="text-brand-gold" />
      </div>

      {/* Corner accent */}
      <div className="absolute top-24 right-8 z-10 hidden xl:block">
        <div className="text-white/20 text-xs uppercase tracking-[0.4em] writing-mode-vertical rotate-90">
          Licensed · Insured · Professional
        </div>
      </div>
    </section>
  );
}
