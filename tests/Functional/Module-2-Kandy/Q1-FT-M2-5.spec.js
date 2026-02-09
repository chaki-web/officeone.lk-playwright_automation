import { test, expect } from '@playwright/test';

test('Verify Page Refresh', async ({ page }) => {
  await page.goto('https://www.officeone.lk/');
  await page.locator('#menu-item-2917').getByRole('link', { name: 'Office One Kandy' }).click();
  await page.goto('https://www.officeone.lk/office-one-kandy/');
});