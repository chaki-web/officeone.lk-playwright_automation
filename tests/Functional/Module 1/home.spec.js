import { test, expect } from '@playwright/test';

test.describe('Module 1 - Home', () => {

  test('Verify homepage loads successfully', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');
    await expect(
      page.getByRole('heading', { name: 'WELCOME TO OFFICE ONE' })
    ).toBeVisible();
  });

  test('Verify that each package navigates in Colombo', async ({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-colombo/');
    await page.getByRole('link', { name: 'OUR PACKAGES' }).click();
    await expect(page.locator('#HotDesk, #SingleCabin, #MeetingRoom').first()).toBeVisible();
  });

  test('Verify that each package navigates in Kandy', async ({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-kandy/');
    await page.getByRole('link', { name: 'OUR PACKAGES' }).click();
    await expect(page.locator('#ceocabin').first()).toBeVisible();
  });

  test('Testing whether page redirects to whatsapp', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');
    const page1Promise = page.waitForEvent('popup');
    await page.locator('.joinchat__button__open').click();
    const page1 = await page1Promise;
    await page1.close();
  });

  test('Verify main logo redirects to homepage', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');
    await page.getByRole('link', { name: 'Office One', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'WELCOME TO OFFICE ONE' })).toBeVisible();
  });

  test('Verify Home button redirects to the homepage', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');
    await page.locator('#menu-item-1093').click();
    await expect(page).toHaveURL('https://www.officeone.lk/');
  });

  test('Verify Office One Kandy button redirects to the Kandy site', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');
    await page.locator('#menu-item-2917').click();
    await expect(page).toHaveURL('https://www.officeone.lk/office-one-kandy/');
  });

  test('Verify Office One Colombo button redirects to the Colombo site', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');
    await page.locator('#menu-item-2916').click();
    await expect(page).toHaveURL('https://www.officeone.lk/office-one-colombo/');
  });

  test('Verify banner video visibility', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');
    await expect(page.locator('#post-1183 div').filter({ hasText: 'WELCOME TOOFFICE ONE Flexible' }).nth(2)).toBeVisible();
  });

  test.only('Verify kandy site navigation', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');
    await page.locator('#menu-item-2917').getByRole('link', { name: 'Office One Kandy' }).click();
    await page.goto('https://www.officeone.lk/office-one-kandy/');
  });

});