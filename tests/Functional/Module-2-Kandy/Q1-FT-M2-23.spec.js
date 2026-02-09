import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://officeone.lk/office-one-kandy/');
  await page.locator('#ceocabin').getByRole('link', { name: 'Book Now' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('testone');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('sufferunicontact@gmail.com');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('test');
  await page.getByRole('textbox', { name: 'Message' }).click();
  await page.getByRole('textbox', { name: 'Message' }).fill('test');
  await page.getByRole('button', { name: 'Book Now' }).click();
  await expect(page.getByText('Office One Center Kandy ColomboThis field is required')).toBeVisible();
});