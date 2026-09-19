"use client";

import Image from "next/image";
import { ctaBannerSection, ctaLink } from "@/data/content";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBannerSection.background})` }}
      />

      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Centered Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center gap-8">
        {/* Large Logo */}
        <Image
          src={ctaBannerSection.logo}
          alt="即梦AI"
          width={200}
          height={60}
          className="w-[200px] h-auto"
        />

        {/* Animated CTA Button */}
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium text-base overflow-hidden group hover:scale-105 transition-transform duration-300"
        >
          {/* Video Background inside button */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="即梦AI创作按钮动态背景"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/videos/cta-btn-bg.mp4" type="video/mp4" />
          </video>

          {/* Gradient Fallback (behind video, visible if video fails) */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 -z-10" />

          {/* Button Text */}
          <span className="relative z-10">{ctaBannerSection.ctaText}</span>
          <ArrowRight className="relative z-10 w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
