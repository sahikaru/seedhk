import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "Googlebot",
          "Googlebot-Image",
          "Googlebot-Video",
          "Bingbot",
          "Sosospider",
          "Bytespider",
          "OAI-SearchBot",
          "ChatGPT-User",
          "PerplexityBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
