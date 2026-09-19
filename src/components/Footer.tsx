import { footerSection, navLinks, siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#070714] text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="mb-3 text-lg font-semibold text-white">
              {siteConfig.shortTitle}
            </p>
            <p className="max-w-xl text-sm leading-7 text-gray-400">
              {siteConfig.disclaimer}
            </p>
            <p className="mt-4 text-xs text-gray-400">
              内容最近核对：2026年9月19日
            </p>
          </div>

          <nav aria-label="页脚站内导航">
            <p className="mb-4 text-sm font-semibold text-white">页面导航</p>
            <ul className="space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-sm font-semibold text-white">官方资料</p>
            <ul className="space-y-3 text-sm">
              {footerSection.official.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-gray-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SeedanceHK AI 创作指南</p>
          <div className="flex flex-wrap gap-4">
            {footerSection.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gray-300"
              >
                {item.label}官方账号
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
