import type { MetadataRoute } from "next";
import { heroSection, siteConfig } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteConfig.url}/`,
      lastModified: new Date(`${siteConfig.lastModified}T00:00:00+08:00`),
      changeFrequency: "monthly",
      priority: 1,
      images: [
        `${siteConfig.url}${siteConfig.ogImage}`,
        `${siteConfig.url}${heroSection.poster}`,
      ],
    },
  ];
}
