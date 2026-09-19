import Image from "next/image";
import { aiPaintingSection, ctaLink } from "@/data/content";

export default function AIPainting() {
  return (
    <section
      id="ai-painting"
      className="relative w-full bg-cover bg-center bg-no-repeat py-20 md:py-32"
      style={{
        backgroundImage:
          "url('/assets/images/backgrounds/ai-painting-bg.jpg')",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top area */}
        <div className="mb-12 flex flex-col items-start gap-6 md:mb-16 md:flex-row md:items-start md:justify-between">
          {/* Left badge */}
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="text-blue-400">&#10022;</span>
            {aiPaintingSection.badge}
          </span>

          {/* Right heading + description */}
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {aiPaintingSection.heading}
            </h2>
            <p className="text-base leading-relaxed text-white/70 md:text-lg">
              {aiPaintingSection.description}
            </p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {aiPaintingSection.gallery.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={533}
                className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:p-6">
                <p className="mb-3 text-sm leading-relaxed text-white md:text-base">
                  {item.alt}
                </p>
                <a
                  href={ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30"
                >
                  即梦成片
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
