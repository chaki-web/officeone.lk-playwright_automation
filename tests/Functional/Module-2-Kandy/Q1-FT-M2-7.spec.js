import { test, expect } from '@playwright/test';

test('Verify that each package navigates ', async ({ page }) => {
  await page.goto('https://www.officeone.lk/office-one-kandy/');
  await page.getByRole('link', { name: 'OUR PACKAGES' }).click();
  await page.getByRole('link', { name: 'CEO Cabin' }).click();
  await page.getByRole('heading', { name: 'CEO Cabin' }).click();
  await page.getByRole('link', { name: 'Manager Cabin' }).click();
  await page.getByRole('heading', { name: 'Manager Cebine' }).click();
  await page.getByRole('link', { name: 'Conference Room' }).click();
  await page.getByRole('heading', { name: 'Conference Room' }).click();
  await page.getByRole('link', { name: 'Full Focus Hot Desk' }).click();
  await page.getByRole('heading', { name: 'Full Focus Hot Desk' }).click();
  await page.getByRole('link', { name: 'Daylong Dedication Hot Desk' }).click();
  await page.getByRole('heading', { name: 'Daylong Dedication Hot Desk' }).click();
  await page.getByRole('link', { name: 'Hourly Harmony Hot Desk' }).click();
  await page.getByRole('heading', { name: 'Hourly Harmony Hot Desk' }).click();
});

