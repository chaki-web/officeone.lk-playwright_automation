import { test, expect } from '@playwright/test';

test('Book Now box should be visible', async ({ page }) => {
  await page.goto('https://officeone.lk/office-one-kandy/');

  const bookNowBox = page.getByRole('heading', { name: 'Send us a message' });

  await bookNowBox.scrollIntoViewIfNeeded();
  await expect(bookNowBox).toBeVisible();
});
