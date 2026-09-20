import Image from "next/image";
import { ctaLink, heroSection } from "@/data/content";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <picture className="absolute inset-0">
        <source media="(max-width: 767px)" srcSet={heroSection.mobilePoster} />
        <Image
          src={heroSection.poster}
          alt=""
          aria-hidden="true"
          fill
          unoptimized
          loading="eager"
          fetchPriority="high"
          className="object-cover"
        />
      </picture>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={heroSection.mediaAlt}
      >
        <source
          media="(max-width: 767px)"
          src={heroSection.efficientMobileVideo}
          type='video/webm; codecs="vp9"'
        />
        <source
          media="(max-width: 767px)"
          src={heroSection.mobileVideo}
          type="video/mp4"
        />
        <source src={heroSection.efficientVideo} type='video/webm; codecs="vp9"' />
        <source src={heroSection.video} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1
          id="hero-heading"
          className="text-6xl md:text-8xl font-bold text-white mb-10 tracking-wide"
        >
          {heroSection.heading}
        </h1>

        <div className="w-full max-w-2xl">
          <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-5 py-3">
            <span className="min-w-0 flex-1 text-gray-300 text-base select-none truncate">
              {heroSection.promptText}
            </span>

            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 ml-4 flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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
