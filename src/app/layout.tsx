import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://seedancehk.com"),
  title: "即梦AI - 即刻造梦",
  description:
    "即梦AI是字节跳动旗下免费AI图片和视频创作平台，提供文生图、视频生成、智能画布等AI创作工具。输入简单的文案或图片，即可快速生成优质AI视频和图片作品。",
  keywords:
    "即梦AI,AI绘画,AI视频生成,文生图,智能画布,AI创作,字节跳动,Dreamina",
  openGraph: {
    title: "即梦AI - 即刻造梦",
    description:
      "即梦AI是字节跳动旗下免费AI图片和视频创作平台，提供文生图、视频生成、智能画布等AI创作工具。",
    url: "https://seedancehk.com",
    siteName: "即梦AI",
    images: [
      {
        url: "/assets/images/backgrounds/ai-painting-bg.jpg",
        width: 1200,
        height: 630,
        alt: "即梦AI - AI创作平台",
      },
    ],
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "即梦AI - 即刻造梦",
    description:
      "即梦AI是字节跳动旗下免费AI图片和视频创作平台，提供文生图、视频生成、智能画布等AI创作工具。",
    images: ["/assets/images/backgrounds/ai-painting-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://seedancehk.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "即梦AI",
    url: "https://seedancehk.com",
    description:
      "即梦AI是字节跳动旗下免费AI图片和视频创作平台",
    publisher: {
      "@type": "Organization",
      name: "深圳市脸萌科技有限公司",
      url: "https://seedancehk.com",
    },
  };

  return (
    <html lang="zh-CN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
