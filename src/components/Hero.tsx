import { ctaLink, heroSection } from "@/data/content";

export default function Hero() {
  return (
    <section
      className="relative min-h-[720px] w-full overflow-hidden md:h-screen"
      aria-labelledby="hero-heading"
    >
      <picture className="absolute inset-0 block overflow-hidden">
        <source
          media="(max-width: 767px)"
          srcSet={heroSection.mobileImage}
        />
        <img
          src={heroSection.desktopImage}
          alt={heroSection.mediaAlt}
          width="1920"
          height="1080"
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </picture>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050610]/90 via-black/20 to-black/30" />

      <div className="relative z-10 flex min-h-[720px] flex-col items-center justify-center px-5 pt-16 text-center md:h-full">
        <p className="mb-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium tracking-[0.18em] text-white/80 backdrop-blur-md md:text-sm">
          {heroSection.eyebrow}
        </p>
        <h1
          id="hero-heading"
          className="mb-5 text-5xl font-bold tracking-wide text-white drop-shadow-lg md:text-8xl"
        >
          {heroSection.heading}
        </h1>
        <p className="mb-9 max-w-2xl text-base leading-7 text-white/75 drop-shadow md:text-lg">
          {heroSection.description}
        </p>

        <div className="w-full max-w-2xl">
          <div className="flex items-center rounded-full border border-white/20 bg-black/25 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-5">
            <span className="min-w-0 flex-1 truncate text-left text-sm text-white/65 md:text-base">
              {heroSection.promptText}
            </span>

            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:from-blue-600 hover:to-blue-700 md:px-5"
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
        <p className="mt-5 text-xs text-white/55">
          独立内容指南 · 创作入口跳转至即梦AI官网
        </p>
      </div>
    </section>
  );
}
