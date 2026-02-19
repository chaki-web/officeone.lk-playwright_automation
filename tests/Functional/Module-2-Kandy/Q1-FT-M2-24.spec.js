import { test, expect } from '@playwright/test';

test('Verify book now form validation with empty package field', async ({ page }) => {
  await page.goto('https://www.officeone.lk/office-one-kandy/');
  await page.locator('#ceocabin').getByRole('link', { name: 'Book Now' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('testone');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('sufferunicontact@gmail.com');
  await page.getByRole('radio', { name: 'Kandy' }).check();
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('test');
  await page.getByRole('textbox', { name: 'Message' }).click();
  await page.getByRole('textbox', { name: 'Message' }).fill('test');
  await page.getByRole('button', { name: 'Book Now' }).click();
  await expect(page.getByLabel('Your Workspace Awaits – Book').getByText('Packages- Select -CEO Cabin')).toBeVisible();
});