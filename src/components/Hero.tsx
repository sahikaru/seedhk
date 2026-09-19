"use client";

import { heroSection, ctaLink } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/assets/videos/feature-2.mp4"
        poster="/assets/videos/posters/feature-2.jpg"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-wide">
          {heroSection.heading}
        </h1>

        {/* Prompt Input Bar */}
        <div className="w-full max-w-2xl">
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-3">
            {/* Left: placeholder text */}
            <span className="flex-1 text-gray-400 text-base select-none truncate">
              {heroSection.promptText}
            </span>

            {/* Right: CTA Button */}
            <a
              href={ctaLink}
              className="flex-shrink-0 ml-4 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
            >
              {/* Sparkle icon */}
              <svg
                className="w-4 h-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L9.79 6.21L16 8L9.79 9.79L8 16L6.21 9.79L0 8L6.21 6.21L8 0Z"
                  fill="currentColor"
                />
              </svg>
              {heroSection.ctaText}
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
