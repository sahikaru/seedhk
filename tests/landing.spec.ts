import { test, expect } from "@playwright/test";

test.describe("Landing page structure", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders header with navigation", async ({ page }) => {
    const header = page.locator("header");
    await expect(header).toBeVisible();

    await expect(page.getByRole("link", { name: "即梦AI创作指南首页" })).toBeVisible();
    const mainNav = page.getByRole("navigation", { name: "主导航" });
    await expect(mainNav.getByRole("link", { name: "视频生成" })).toBeVisible();
    await expect(mainNav.getByRole("link", { name: "AI绘画" })).toBeVisible();
    await expect(mainNav.getByRole("link", { name: "智能画布" })).toBeVisible();
    await expect(mainNav.getByRole("link", { name: "使用指南" })).toBeVisible();
    await expect(mainNav.getByRole("link", { name: "常见问题" })).toBeVisible();
    await expect(page.getByRole("link", { name: "开启即梦" })).toBeVisible();
  });

  test("renders hero section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "即刻造梦" })).toBeVisible();
    await expect(page.getByText("水母在蔚蓝的水中轻盈漂浮")).toBeVisible();
    await expect(page.getByRole("link", { name: "即梦成片" }).first()).toBeVisible();

    const hero = page.locator('section[aria-labelledby="hero-heading"]');
    const video = hero.locator("video");
    await expect.poll(() => video.evaluate((node: HTMLVideoElement) =>
      node.readyState >= 2 && !node.paused && node.currentTime > 0
    )).toBe(true);
    expect(await video.evaluate((node: HTMLVideoElement) => node.videoWidth)).toBe(3840);
    expect(await video.evaluate((node: HTMLVideoElement) => node.videoHeight)).toBe(2160);
    expect(await video.evaluate((node: HTMLVideoElement) => node.currentSrc)).toContain("hero-jellyfish-6899910-4k.webm");
    expect(await video.evaluate((node: HTMLVideoElement) => node.duration)).toBeCloseTo(8, 1);
    await expect(video).toHaveAttribute("aria-label", /水母/);
    await expect(hero.locator("picture")).toHaveCount(1);
    await expect(hero.getByText("独立内容指南", { exact: false })).toHaveCount(0);
  });

  test("mobile keeps the same video and full-screen composition", async ({ browser }) => {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.goto("/");
    const hero = page.locator('section[aria-labelledby="hero-heading"]');
    const video = hero.locator("video");
    await expect.poll(() => video.evaluate((node: HTMLVideoElement) =>
      node.readyState >= 2 && !node.paused && node.currentTime > 0
    )).toBe(true);
    expect(await video.evaluate((node: HTMLVideoElement) => node.videoWidth)).toBe(1080);
    expect(await video.evaluate((node: HTMLVideoElement) => node.videoHeight)).toBe(1920);
    expect(await video.evaluate((node: HTMLVideoElement) => node.currentSrc)).toContain("hero-jellyfish-6899910-mobile.webm");
    expect(await video.evaluate((node: HTMLVideoElement) => node.duration)).toBeCloseTo(8, 1);
    expect(await hero.locator("picture img").evaluate((node: HTMLImageElement) => node.currentSrc)).toContain("6899910-mobile.webp");
    const requests = await page.evaluate(() => performance.getEntriesByType("resource").map((entry) => entry.name));
    expect(requests.some((url) => url.includes("6899910-4k."))).toBe(false);
    expect(Math.round((await hero.boundingBox())!.height)).toBe(844);
    await expect(hero.getByRole("link", { name: "即梦成片" })).toBeInViewport();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
    await page.close();
  });

  test("clear first frame remains visible when video cannot load", async ({ browser }) => {
    for (const width of [1440, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 844 } });
      await page.route(/hero-jellyfish-6899910-.*\.(mp4|webm)/, (route) => route.abort());
      await page.goto("/");
      const poster = page.locator('section[aria-labelledby="hero-heading"] picture img');
      await expect.poll(() => poster.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true);
      expect(await poster.evaluate((node: HTMLImageElement) => node.naturalWidth)).toBe(width === 390 ? 1080 : 2560);
      await expect(page.getByRole("heading", { name: "即刻造梦" })).toBeVisible();
      await page.close();
    }
  });

  test("MP4 compatibility renditions also play", async ({ browser }) => {
    for (const width of [1440, 390]) {
      const page = await browser.newPage({ viewport: { width, height: 844 } });
      await page.goto("/");
      const video = page.locator('section[aria-labelledby="hero-heading"] video');
      await video.evaluate((node: HTMLVideoElement) => {
        node.querySelectorAll('source[type^="video/webm"]').forEach((source) => source.remove());
        node.load();
      });
      await expect.poll(() => video.evaluate((node: HTMLVideoElement) => !node.paused && node.currentTime > 0)).toBe(true);
      expect(await video.evaluate((node: HTMLVideoElement) => node.currentSrc)).toContain(width === 390 ? "6899910-mobile.mp4" : "6899910-4k.mp4");
      expect(await video.evaluate((node: HTMLVideoElement) => node.videoWidth)).toBe(width === 390 ? 1080 : 3840);
      await page.close();
    }
  });

  test("renders video feature section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "灵感即刻成片" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "流畅运镜，生动自然" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /从首帧到尾帧/ })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "中文创作，得心应手" })
    ).toBeVisible();
  });

  test("renders AI painting section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "AI绘画 梦境成真" })
    ).toBeVisible();

    const galleryImages = page.locator(
      'img[alt*="风格"], img[alt*="插画"], img[alt*="电影"]'
    );
    const count = await galleryImages.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("renders smart canvas section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "智能画布 多图AI融合" })
    ).toBeVisible();

    await expect(page.getByRole("button", { name: "多图层编辑" })).toBeVisible();
    await expect(
      page.getByRole("button", { name: "精细化控制" })
    ).toBeVisible();
  });

  test("renders community section", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "创意涌动 灵感绽放" })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "获取创作灵感" })
    ).toBeVisible();
  });

  test("renders CTA banner", async ({ page }) => {
    const ctaLogo = page.locator('img[alt="即梦AI"]').last();
    await expect(ctaLogo).toBeVisible();
    await expect(
      page.getByRole("link", { name: "开启智能创作" })
    ).toBeVisible();
  });

  test("renders product guide and FAQs", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "即梦AI 与 Seedance 能做什么？" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "从提示词到第一段 AI 视频" })
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "即梦AI 与 Seedance 常见问题" })
    ).toBeVisible();
    await expect(page.locator("#faq details")).toHaveCount(4);
  });

  test("renders footer", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(footer).toContainText("独立的产品介绍与使用指南");
    await expect(footer).toContainText("SeedanceHK AI 创作指南");
    await expect(footer).not.toContainText("粤ICP备13065114号");
  });

  test("smart canvas tab switching works", async ({ page }) => {
    const tab2 = page.getByRole("button", { name: "精细化控制" });
    await tab2.click();

    await expect(tab2).toHaveClass(/text-blue-600/);
  });
});
