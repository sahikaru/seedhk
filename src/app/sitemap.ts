import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(`${siteConfig.lastReviewed}T00:00:00+08:00`),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteConfig.url}${siteConfig.ogImage}`,
        `${siteConfig.url}/assets/images/backgrounds/hero-cosmic-desktop.webp`,
      ],
    },
  ];
}
