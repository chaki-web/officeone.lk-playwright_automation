import { test, expect } from '@playwright/test';

test('Verify reviews can be scrolled horizontically', async ({ page }) => {
  await page.goto('https://officeone.lk/office-one-kandy/');
  await expect(page.locator('.swiper.reviews_embedder_slider')).toBeVisible();
  await page.locator('.grwp-swiper-button-next').click();
  await expect(page.locator('.swiper.reviews_embedder_slider')).toBeVisible();
  await expect(page.locator('.swiper.reviews_embedder_slider')).toBeVisible();
  await page.locator('.grwp-swiper-button-next').click();
  await expect(page.locator('.swiper.reviews_embedder_slider')).toBeVisible();
});