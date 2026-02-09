import { test, expect } from '@playwright/test';

const KANDY_PAGE_URL = 'https://officeone.lk/office-one-kandy/';

test('Book Now form shows required field validation when submitting without email', async ({ page }) => {
  await page.goto(KANDY_PAGE_URL);
  await page.locator('#ceocabin').getByRole('link', { name: 'Book Now' }).click();

  // Fill form but leave Email empty to trigger validation
  await page.getByRole('textbox', { name: 'Name *' }).fill('testone');
  await page.getByRole('radio', { name: 'Kandy' }).check();
  await page.locator('#ff_5_dropdown').selectOption('CEO Cabin - 3,500.00 ( 1 Hour )');
  await page.getByRole('textbox', { name: 'Subject' }).fill('test');
  await page.getByRole('textbox', { name: 'Message' }).fill('test');

  await page.getByRole('button', { name: 'Book Now' }).click();
  await expect(page.getByText('This field is required')).toBeVisible();
});