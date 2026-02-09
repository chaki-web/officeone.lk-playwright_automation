import { test, expect } from '@playwright/test';

test('Verify quick links (Footer Navigation)', async ({ page }) => {
  await page.goto('https://officeone.lk/office-one-kandy/');
  await page.locator('#colophon').getByRole('link', { name: 'Home' }).click();
  await expect(page.getByRole('heading', { name: 'WELCOME TO OFFICE ONE' })).toBeVisible();
  await page.goto('https://www.officeone.lk/office-one-kandy/');
  await page.locator('#colophon').getByRole('link', { name: 'Office One Kandy' }).click();
  await expect(page.getByRole('heading', { name: 'OFFICE ONE KANDY', exact: true })).toBeVisible();
  await page.goto('https://www.officeone.lk/office-one-kandy/');
  await page.locator('#colophon').getByRole('link', { name: 'Office One Colombo' }).click();
  await expect(page.getByRole('heading', { name: 'OFFICEONE COLOMBO' })).toBeVisible();
  await page.goto('https://www.officeone.lk/office-one-kandy/');
});