import { test, expect } from "@playwright/test";

test.describe("SEO validation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("has correct page title", async ({ page }) => {
    await expect(page).toHaveTitle("即梦AI - 即刻造梦");
  });

  test("has meta description", async ({ page }) => {
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute(
      "content",
      /即梦AI是字节跳动旗下免费AI图片和视频创作平台/
    );
  });

  test("has meta keywords", async ({ page }) => {
    const keywords = page.locator('meta[name="keywords"]');
    await expect(keywords).toHaveAttribute("content", /即梦AI/);
  });

  test("has Open Graph tags", async ({ page }) => {
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", /即梦AI/);

    const ogDescription = page.locator('meta[property="og:description"]');
    await expect(ogDescription).toHaveAttribute("content", /.+/);

    const ogUrl = page.locator('meta[property="og:url"]');
    await expect(ogUrl).toHaveAttribute(
      "content",
      /^https:\/\/seedancehk\.com\/?$/
    );

    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute("content", /.+/);
  });

  test("has Twitter card tags", async ({ page }) => {
    const twitterCard = page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute("content", "summary_large_image");

    const twitterTitle = page.locator('meta[name="twitter:title"]');
    await expect(twitterTitle).toHaveAttribute("content", /即梦AI/);
  });

  test("has canonical URL", async ({ page }) => {
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute(
      "href",
      /^https:\/\/seedancehk\.com\/?$/
    );
  });

  test("has JSON-LD structured data", async ({ page }) => {
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const content = await jsonLd.textContent();
    expect(content).toBeTruthy();
    const data = JSON.parse(content!);
    expect(data["@type"]).toBe("WebSite");
    expect(data.name).toBe("即梦AI");
    expect(data.url).toBe("https://seedancehk.com");
  });

  test("has correct lang attribute", async ({ page }) => {
    const html = page.locator("html");
    await expect(html).toHaveAttribute("lang", "zh-CN");
  });

  test("all images have alt text", async ({ page }) => {
    const images = page.locator("img");
    const count = await images.count();
    for (let i = 0; i < count; i++) {
      const alt = await images.nth(i).getAttribute("alt");
      expect(alt, `Image ${i} missing alt text`).toBeTruthy();
    }
  });

  test("has proper heading hierarchy", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toHaveCount(1);
    await expect(h1).toContainText("即刻造梦");

    const h2s = page.locator("h2");
    const h2Count = await h2s.count();
    expect(h2Count).toBeGreaterThanOrEqual(4);
  });
});
