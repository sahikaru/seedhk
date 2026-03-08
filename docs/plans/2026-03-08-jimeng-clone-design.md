# Jimeng AI Landing Page Clone - Design Document

## Overview

1:1 clone of jimeng.jianying.com landing page, deployed to GitHub Pages with SEO optimization, performance testing, and SEO testing.

## Tech Stack

- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS 4
- **Testing**: Playwright (E2E) + Lighthouse CI (Performance/SEO audit)
- **Deployment**: Static export (`output: 'export'`) for GitHub Pages

## Page Sections

| # | Component | Description |
|---|-----------|-------------|
| 1 | Header | Logo + nav links + CTA button, sticky top |
| 2 | Hero | Full-screen video background + heading + prompt bar |
| 3 | VideoFeature | "Inspiration to Video" + 3 numbered feature cards with video previews |
| 4 | AIPainting | "AI Painting" + 6-image gallery grid |
| 5 | SmartCanvas | "Smart Canvas" + tab switcher + canvas demo images |
| 6 | Community | "Creative Community" + masonry grid of 12 user works |
| 7 | CTABanner | Large logo + CTA button with gradient background |
| 8 | Footer | Nav links + company info + ICP records + social media icons |

## Directory Structure

```
seedance/
├── public/
│   └── assets/
│       ├── images/       # All downloaded images
│       ├── videos/       # All downloaded videos
│       └── icons/        # SVG icons
├── src/
│   ├── app/
│   │   ├── layout.tsx    # Root layout with SEO meta
│   │   └── page.tsx      # Home page assembly
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── VideoFeature.tsx
│   │   ├── AIPainting.tsx
│   │   ├── SmartCanvas.tsx
│   │   ├── Community.tsx
│   │   ├── CTABanner.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── content.ts    # All text content and asset paths
├── e2e/
│   ├── visual.spec.ts
│   └── seo.spec.ts
├── lighthouse/
│   └── lighthouserc.js
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

## Design Tokens

### Colors
- Primary gradient: `radial-gradient(88.89% 182.5% at 69.13% 5.25%, #1375C8 0%, #157ACD 28.99%, #0C3560 72.78%, #060C20 100%)`
- CTA button: blue-to-cyan gradient
- Background sections: dark navy (#060C20), white (#FFFFFF), blue gradient
- Text: white on dark, dark on white

### Typography
- Font family: `"Albert Sans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif`
- H1: ~72px bold
- H2: ~48px bold
- H3: ~28px bold
- Body: 16px regular

### Assets
- 6 gallery images (AI painting section)
- 12 community work images + 12 avatar images
- 3 smart canvas images
- 9 video files with poster images
- Background images for hero and CTA sections
- Logo SVGs

## SEO Strategy

- Pre-rendered static HTML
- Complete meta tags (title, description, keywords, og:*, twitter:*)
- JSON-LD structured data (WebSite + Organization)
- Semantic HTML5 elements
- sitemap.xml + robots.txt
- Canonical URL
- All images with descriptive alt text

## Testing Plan

### Playwright E2E
- Section visibility verification
- Navigation link validation
- Responsive breakpoint testing (desktop/tablet/mobile)
- Visual regression snapshots

### Lighthouse CI
- Performance >= 90
- SEO >= 95
- Accessibility >= 85
- Best Practices >= 90

## Asset Download Strategy

All images and videos from the original site CDN will be downloaded to `public/assets/` for self-contained deployment. Source URLs are documented in `src/data/content.ts`.
