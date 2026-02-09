import { test, expect } from '@playwright/test';

test('Verify Google Map is visible', async ({ page }) => {
  await page.goto('https://officeone.lk/office-one-kandy/');
  await expect(page.locator('iframe[title="OfficeOne 3rd Floor No 349, 2/1 Katugastota Rd, Kandy, Katugastota 20800"]').contentFrame().locator('.gm-style > div > div:nth-child(2)').first()).toBeVisible();
});