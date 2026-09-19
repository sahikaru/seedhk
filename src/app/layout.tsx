import type { Metadata, Viewport } from "next";
import { faqSection, heroSection, siteConfig } from "@/data/content";
import "./globals.css";

const absoluteUrl = (path: string) => new URL(path, siteConfig.url).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s｜${siteConfig.shortTitle}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortTitle,
  authors: [{ name: siteConfig.publisher, url: siteConfig.url }],
  creator: siteConfig.publisher,
  publisher: siteConfig.publisher,
  category: "AI视频创作",
  keywords: siteConfig.keywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.shortTitle,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "宇航员置身绚丽宇宙梦境的即梦AI与Seedance创作指南封面",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico",
  },
  referrer: "strict-origin-when-cross-origin",
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070714",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: `${siteConfig.url}/`,
        name: siteConfig.shortTitle,
        description: siteConfig.description,
        inLanguage: "zh-CN",
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: `${siteConfig.url}/`,
        name: siteConfig.title,
        description: siteConfig.description,
        inLanguage: "zh-CN",
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        primaryImageOfPage: {
          "@id": `${siteConfig.url}/#hero-image`,
        },
        dateModified: `${siteConfig.lastReviewed}T00:00:00+08:00`,
        mainEntity: [
          { "@id": `${siteConfig.url}/#faq` },
        ],
      },
      {
        "@type": "ImageObject",
        "@id": `${siteConfig.url}/#hero-image`,
        name: heroSection.mediaAlt,
        caption: heroSection.description,
        contentUrl: absoluteUrl(heroSection.desktopImage),
        width: 1920,
        height: 1080,
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: faqSection.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
    ],
  };

  return (
    <html lang="zh-CN">
      <body>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded bg-white px-4 py-2 text-black focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          跳到主要内容
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
