import { test, expect } from '@playwright/test';

test('Verify book now form validation with empty fields', async ({ page }) => {
  await page.goto('https://officeone.lk/office-one-kandy/');
  await page.locator('#ceocabin').getByRole('link', { name: 'Book Now' }).click();
  await page.getByRole('button', { name: 'Book Now' }).click();
  await expect(page.getByText('This field is required').first()).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^EmailThis field is required$/ }).getByRole('alert')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Office One Center Kandy ColomboThis field is required$/ }).getByRole('alert')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^SubjectThis field is required$/ }).getByRole('alert')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^MessageThis field is required$/ }).getByRole('alert')).toBeVisible();
});