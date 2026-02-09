import { test, expect } from '@playwright/test';

test('Navigate to Office One Kandy and verify heading', async ({ page }) => {
  await page.goto('https://www.officeone.lk/');

  // Click using ID (best practice)
  await page.locator('#menu-item-2917').click();

  // Assert heading exists
  await expect(
    page.getByRole('heading', { name: 'OFFICE ONE KANDY', exact: true })
  ).toBeVisible();
});
test('Verify Home button redirects to the homepage', async ({ page }) => {
  await page.goto('https://www.officeone.lk/');
  await page.locator('#menu-item-1093').click();
  await expect(page).toHaveURL('https://www.officeone.lk/');
});
