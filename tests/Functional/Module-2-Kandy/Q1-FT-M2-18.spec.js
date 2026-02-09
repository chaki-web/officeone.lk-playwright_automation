import { test, expect } from '@playwright/test';

test('Verify book now form loads correctly', async ({ page }) => {
  await page.goto('https://officeone.lk/office-one-kandy/');
  await page.locator('#ceocabin').getByRole('link', { name: 'Book Now' }).click();
  await expect(page.getByText('Your Workspace Awaits – Book Now Contact FormΔNameEmailOffice One Center Kandy')).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#ManagerCabin').getByRole('link', { name: 'Book Now' }).click();
  await expect(page.getByText('Your Workspace Awaits – Book Now Contact FormΔNameEmailOffice One Center Kandy')).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#Conferenceroom').getByRole('link', { name: 'Book Now' }).click();
  await expect(page.getByText('Your Workspace Awaits – Book Now Contact FormΔNameEmailOffice One Center Kandy')).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('[id="FullFocusHot Desk"]').getByRole('link', { name: 'Book Now' }).click();
  await expect(page.getByText('Your Workspace Awaits – Book Now Contact FormΔNameEmailOffice One Center Kandy')).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('[id="Daylong DedicationHotDesk"]').getByRole('link', { name: 'Book Now' }).click();
  await expect(page.getByText('Your Workspace Awaits – Book Now Contact FormΔNameEmailOffice One Center Kandy')).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#HourlyHarmonyHotDesk').getByRole('link', { name: 'Book Now' }).click();
  await expect(page.getByText('Your Workspace Awaits – Book Now Contact FormΔNameEmailOffice One Center Kandy')).toBeVisible();
  await page.getByRole('button', { name: 'Close' }).click();
});