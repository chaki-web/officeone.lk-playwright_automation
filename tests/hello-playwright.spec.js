import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).fill('sigiriya');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).press('Enter');
  await page.getByRole('link', { name: 'Talk' }).click();
  await page.getByText('Preparing some additional').click();
});