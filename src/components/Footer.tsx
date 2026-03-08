import { navLinks, footerSection, siteConfig } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a1a] text-gray-400 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-8">
        {/* Row 1: Nav Links */}
        <div className="flex items-center justify-center gap-8 pb-8 border-b border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Row 2: Legal + Company Info */}
        <div className="flex items-start justify-between py-6 border-b border-white/10 text-xs text-gray-500">
          {/* Left: Legal links, ICP, Police */}
          <div className="flex flex-col gap-3">
            {/* Legal links */}
            <div className="flex items-center gap-4">
              {footerSection.legal.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* ICP records */}
            <div className="flex items-center gap-2">
              {footerSection.icp.map((item, index) => (
                <span key={item.label} className="flex items-center gap-2">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                  {index < footerSection.icp.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </span>
              ))}
            </div>

            {/* Police record */}
            <div className="flex items-center gap-1.5">
              {/* Shield icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M7 1L2 3V6.5C2 9.5 4 12 7 13C10 12 12 9.5 12 6.5V3L7 1Z"
                  fill="#d4a574"
                  stroke="#d4a574"
                  strokeWidth="0.5"
                />
                <path
                  d="M7 3L4 4.5V6.5C4 8.5 5.5 10.5 7 11C8.5 10.5 10 8.5 10 6.5V4.5L7 3Z"
                  fill="#0a0a1a"
                />
              </svg>
              <a
                href={footerSection.police.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors duration-200"
              >
                {footerSection.police.label}
              </a>
            </div>
          </div>

          {/* Right: Company info */}
          <div className="flex flex-col items-end gap-2 text-right">
            <span>{siteConfig.company.name}</span>
            <span>{siteConfig.company.address}</span>
          </div>
        </div>

        {/* Row 3: Social Media */}
        <div className="flex items-center justify-between pt-6">
          {/* Social links */}
          <div className="flex items-center gap-5">
            {footerSection.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
                title={item.label}
              >
                <SocialIcon name={item.label} />
              </a>
            ))}
          </div>

          {/* QR Code placeholders */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gray-500"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="3" height="3" />
                  <rect x="18" y="18" width="3" height="3" />
                  <rect x="14" y="18" width="3" height="3" />
                  <rect x="18" y="14" width="3" height="3" />
                </svg>
              </div>
              <span className="text-[10px] text-gray-600">微信</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gray-500"
                >
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="3" height="3" />
                  <rect x="18" y="18" width="3" height="3" />
                  <rect x="14" y="18" width="3" height="3" />
                  <rect x="18" y="14" width="3" height="3" />
                </svg>
              </div>
              <span className="text-[10px] text-gray-600">微博</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Minimal social media icons */
function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "抖音":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-400"
        >
          <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 0 20 4.54v3.22a7.06 7.06 0 0 1-3.71-1.06v5.36A5.97 5.97 0 0 1 10.33 18 5.97 5.97 0 0 1 4.36 12a5.97 5.97 0 0 1 7.15-5.86v3.36a2.72 2.72 0 0 0-3.89 2.5 2.72 2.72 0 0 0 2.72 2.72 2.72 2.72 0 0 0 2.72-2.72V2h3.22a4.28 4.28 0 0 0 .32 3.82z" />
        </svg>
      );
    case "B站":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-400"
        >
          <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.124.929.373.249.249.373.551.373.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z" />
        </svg>
      );
    case "小红书":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-gray-400"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2V7h2v10z" />
        </svg>
      );
    default:
      return null;
  }
}
