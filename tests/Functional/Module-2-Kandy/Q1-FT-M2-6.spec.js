import { test, expect } from '@playwright/test';

test('OUR PACKAGES link scrolls to correct section', async ({ page }) => {
  await page.goto('https://www.officeone.lk/office-one-kandy/');

  await page.getByRole('link', { name: /our packages/i }).click();

  await expect(page.locator('#ourpackages')).toBeInViewport();
});