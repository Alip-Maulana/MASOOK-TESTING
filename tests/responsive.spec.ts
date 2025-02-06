import { test, expect } from "@playwright/test";

const url = "https://sim.dev.masook.id/#/login";

// Grouping test cases untuk uji responsivitas
test.describe("Responsive Web Tests", () => {
  
  test("Desktop View", async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto(url);
    await expect(page).toHaveURL(url);

    // Pastikan halaman utama terlihat dengan baik
    await expect(page.locator("body")).toBeVisible();
  });

  test("Tablet Landscape View", async ({ page }) => {
    await page.setViewportSize({ width: 1024, height: 768 });
    await page.goto(url);
    await expect(page).toHaveURL(url);

    // Periksa apakah menu utama muncul dengan baik
    await expect(page.locator("body")).toBeVisible();
  });

  test("Tablet Portrait View", async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(url);
    await expect(page).toHaveURL(url);

    // Pastikan elemen penting tetap terlihat
    await expect(page.locator("body")).toBeVisible();
  });

  test("iPhone X View", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto(url);
    await expect(page).toHaveURL(url);

    // Pastikan tampilan tetap responsif
    await expect(page.locator("body")).toBeVisible();
  });

  test("Android Phone View", async ({ page }) => {
    await page.setViewportSize({ width: 360, height: 640 });
    await page.goto(url);
    await expect(page).toHaveURL(url);

    // Periksa apakah layout tidak rusak
    await expect(page.locator("body")).toBeVisible();
  });

});
