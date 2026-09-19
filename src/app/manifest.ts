import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "即梦AI · Seedance 创作指南",
    short_name: "SeedanceHK",
    description: "即梦AI与Seedance视频生成、AI绘画和智能画布使用指南。",
    start_url: "/",
    display: "standalone",
    background_color: "#070714",
    theme_color: "#070714",
    lang: "zh-CN",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
