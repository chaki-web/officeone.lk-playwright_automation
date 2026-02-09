import { test, expect } from '@playwright/test';

test('Verify Gallery section successfuly loads', async ({ page }) => {
  await page.goto('https://www.officeone.lk/office-one-kandy/');
  await expect(page.locator('.elementor-element.elementor-element-39e600bd > .e-con-inner')).toBeVisible();
});