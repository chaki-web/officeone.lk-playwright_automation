import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.officeone.lk/office-one-kandy/');
  await page.locator('#ceocabin').getByRole('link', { name: 'Book Now' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('  ');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('');
  await page.getByLabel('Your Workspace Awaits – Book').getByText('Kandy').click();
  await page.locator('#ff_5_dropdown').selectOption('CEO Cabin - 3,500.00 ( 1 Hour )');
  await page.getByRole('textbox', { name: 'Subject' }).click();
  await page.getByRole('textbox', { name: 'Subject' }).fill('  ');
  await page.getByRole('textbox', { name: 'Message' }).click();
  await page.getByRole('textbox', { name: 'Message' }).fill('  ');
  await page.getByRole('button', { name: 'Book Now' }).click();
  await expect(page.getByText('This field is required').first()).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^EmailThis field is required$/ }).getByRole('alert')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^SubjectThis field is required$/ }).getByRole('alert')).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^MessageThis field is required$/ }).getByRole('alert')).toBeVisible();
});