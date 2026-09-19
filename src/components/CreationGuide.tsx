import { faqSection, guideSection, siteConfig } from "@/data/content";

export default function CreationGuide() {
  return (
    <>
      <section id="guide" className="bg-[#070714] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-blue-300">
                产品说明
              </p>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                {guideSection.heading}
              </h2>
              <p className="mt-6 text-base leading-8 text-white/65 md:text-lg">
                {guideSection.intro}
              </p>
              <p className="mt-5 text-xs text-white/65">
                {guideSection.updatedText}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {guideSection.sources.map((source) => (
                  <a
                    key={source.label}
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/70 transition-colors hover:border-white/35 hover:text-white"
                  >
                    {source.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {guideSection.capabilities.map((capability) => (
                <article
                  key={capability.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {capability.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-20 border-t border-white/10 pt-14">
            <div className="mb-10 max-w-2xl">
              <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-blue-300">
                三步开始
              </p>
              <h2 className="text-3xl font-bold text-white md:text-4xl">
                从提示词到第一段 AI 视频
              </h2>
            </div>
            <ol className="grid gap-6 md:grid-cols-3">
              {guideSection.steps.map((step) => (
                <li
                  key={step.number}
                  className="rounded-2xl bg-white p-7 text-gray-900"
                >
                  <span className="text-sm font-bold text-blue-600">
                    {step.number}
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {step.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-white py-20 text-gray-900 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-blue-600">
              FAQ
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">
              {faqSection.heading}
            </h2>
            <p className="mt-4 text-gray-500">{faqSection.description}</p>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {faqSection.items.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold marker:content-none">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="text-2xl font-light text-blue-600 transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-3xl pt-4 text-base leading-8 text-gray-600">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>

          <p className="mt-10 rounded-2xl bg-gray-50 px-6 py-5 text-sm leading-7 text-gray-600">
            {siteConfig.disclaimer}
          </p>
        </div>
      </section>
    </>
  );
}
