"use client";

import { useEffect, useRef, useState } from "react";
import { videoFeatureSection, ctaLink } from "@/data/content";

export default function VideoFeature() {
  const features = videoFeatureSection.features;
  return (
    <section
      id="video-features"
      className="relative w-full py-20 md:py-32 overflow-hidden"
      style={{
        background:
          "radial-gradient(88.89% 182.5% at 69.13% 5.25%, #1375C8 0%, #157ACD 28.99%, #0C3560 72.78%, #060C20 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Top Header Area */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-16 md:mb-24">
          {/* Left Badge */}
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 text-sm text-blue-200 border border-blue-400/30 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <span className="text-blue-300">✦</span>
              {videoFeatureSection.badge}
            </span>
          </div>

          {/* Right Heading & Description */}
          <div className="md:text-right md:max-w-xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {videoFeatureSection.heading}
            </h2>
            <p className="text-base md:text-lg text-white/60 leading-relaxed">
              {videoFeatureSection.description}
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="flex flex-col">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12 md:py-16 ${
                index < features.length - 1
                  ? "border-b border-white/10"
                  : ""
              }`}
            >
              {/* Left Side (40%) */}
              <div className="w-full md:w-[40%] flex flex-col justify-center">
                {/* Large faded number */}
                <span className="text-7xl md:text-8xl font-bold text-white/[0.07] leading-none mb-4 select-none">
                  {feature.number}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 whitespace-pre-line">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm md:text-base leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* CTA Button */}
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white text-sm font-medium group w-fit"
                >
                  <span className="border-b border-white/30 group-hover:border-white pb-0.5 transition-colors duration-300">
                    立即创作
                  </span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Right Side (60%) - Video */}
              <div className="w-full md:w-[60%]">
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-black/20">
                  <LazyFeatureVideo
                    src={feature.video}
                    poster={feature.poster}
                    label={`${feature.title.replace("\n", "")} AI视频示例`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LazyFeatureVideo({
  src,
  poster,
  label,
}: {
  src: string;
  poster: string;
  label: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return;

    videoRef.current.load();
    videoRef.current.play().catch(() => {
      // The poster remains visible when autoplay is unavailable.
    });
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-cover"
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
    >
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
