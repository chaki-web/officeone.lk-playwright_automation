import { test, expect } from '@playwright/test';

test.describe('Module 1 - Home', () => {

  test('Verify homepage loads successfully', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');
    await expect(
      page.getByRole('heading', { name: 'WELCOME TO OFFICE ONE' })
    ).toBeVisible();
  });

});