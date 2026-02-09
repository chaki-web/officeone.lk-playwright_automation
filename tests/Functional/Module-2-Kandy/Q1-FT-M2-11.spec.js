import { test, expect } from '@playwright/test';

test('Verify Reviews are visible ', async ({ page }) => {
  await page.goto('https://officeone.lk/office-one-kandy/');
  await expect(page.getByText('Our Happy Clients! Office One')).toBeVisible();
});