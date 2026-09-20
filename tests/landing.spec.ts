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
    await expect(page.getByText("宇航员沉浸在缤纷迷幻的世界")).toBeVisible();
    await expect(page.getByRole("link", { name: "即梦成片" }).first()).toBeVisible();

    const hero = page.locator('section[aria-labelledby="hero-heading"]');
    const video = hero.locator("video");
    await expect.poll(() => video.evaluate((node: HTMLVideoElement) =>
      node.readyState >= 2 && !node.paused && node.currentTime > 0
    )).toBe(true);
    expect(await video.evaluate((node: HTMLVideoElement) => node.videoWidth)).toBe(3840);
    await expect(hero.locator("picture")).toHaveCount(0);
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
    expect(await video.evaluate((node: HTMLVideoElement) => node.videoWidth)).toBe(1920);
    expect(Math.round((await hero.boundingBox())!.height)).toBe(844);
    await expect(hero.getByRole("link", { name: "即梦成片" })).toBeInViewport();
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
    await page.close();
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
