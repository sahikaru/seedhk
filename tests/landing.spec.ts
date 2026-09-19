import { test, expect } from "@playwright/test";

test.describe("Landing page structure", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("renders header with navigation", async ({ page }) => {
    const header = page.locator("header");
    await expect(header).toBeVisible();

    await expect(page.getByRole("link", { name: "即梦AI" }).first()).toBeVisible();
    await expect(page.getByRole("navigation").getByRole("link", { name: "文生图" })).toBeVisible();
    await expect(page.getByRole("navigation").getByRole("link", { name: "视频生成" })).toBeVisible();
    await expect(page.getByRole("navigation").getByRole("link", { name: "智能画布" })).toBeVisible();
    await expect(page.getByRole("navigation").getByRole("link", { name: "探索" })).toBeVisible();
    await expect(page.getByRole("link", { name: "开启即梦" })).toBeVisible();
  });

  test("renders hero section", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "即刻造梦" })).toBeVisible();
    await expect(page.getByText("宇航员沉浸在缤纷迷幻的世界")).toBeVisible();
    await expect(page.getByRole("link", { name: "即梦成片" }).first()).toBeVisible();

    const heroVideo = page.locator("video").first();
    await expect(heroVideo).toHaveAttribute(
      "src",
      "/assets/videos/feature-2.mp4"
    );
    await expect(heroVideo).toHaveAttribute(
      "poster",
      "/assets/videos/posters/feature-2.jpg"
    );
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

  test("renders footer", async ({ page }) => {
    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
    await expect(page.getByText("深圳市脸萌科技有限公司")).toBeVisible();
    await expect(page.getByText("粤ICP备13065114号")).toBeVisible();
  });

  test("smart canvas tab switching works", async ({ page }) => {
    const tab2 = page.getByRole("button", { name: "精细化控制" });
    await tab2.click();

    await expect(tab2).toHaveClass(/text-blue-600/);
  });
});
