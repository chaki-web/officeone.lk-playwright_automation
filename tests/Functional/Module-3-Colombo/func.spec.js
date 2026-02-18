import { test, expect } from '@playwright/test';

test.describe('Module 3 - Colombo', () => {

  test('Navigate to Office One Colombo and verify heading', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');

    // Click using ID (best practice)
    await page.locator('#menu-item-2916').click();

    // Assert heading exists
    await expect(
      page.getByRole('heading', { name: 'OFFICEONE COLOMBO', exact: true })
    ).toBeVisible();
  });

  test('Navigate to Office One Kandy and verify heading', async ({ page }) => {
  await page.goto('https://www.officeone.lk/');

  // Click using ID (best practice)
  await page.locator('#menu-item-2917').click();

  // Assert heading exists
  await expect(
    page.getByRole('heading', { name: 'OFFICE ONE KANDY', exact: true })
  ).toBeVisible();
});

  test('Verify Home button redirects to the homepage', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');
    await page.locator('#menu-item-1093').click();
    await expect(page).toHaveURL('https://www.officeone.lk/');
  });
});

  test('Verify that button redirects to the Packages section', async ({ page }) => {
    await page.goto('https://www.officeone.lk/');
    await page.locator('#menu-item-1093').click();
    await expect(page).toHaveURL('https://www.officeone.lk/');
  });

  test('Verify that each package navigates', async ({ page }) => {
  await page.goto('https://www.officeone.lk/office-one-colombo/');
  await page.getByRole('link', { name: 'OUR PACKAGES' }).click();

  const packages = [
    { link: 'CEO Cabin', heading: 'CEO Cabin' },
    { link: 'Manager Cabin', heading: 'Manager Cebine' },
    { link: 'Conference Room', heading: 'Conference Room' },
    { link: 'Full Focus Hot Desk', heading: 'Full Focus Hot Desk' },
    { link: 'Daylong Dedication Hot Desk', heading: 'Daylong Dedication Hot Desk' },
    { link: 'Hourly Harmony Hot Desk', heading: 'Hourly Harmony Hot Desk' },
  ];

  for (const pkg of packages) {
    await page.getByRole('link', { name: pkg.link }).click();
    await expect(page.getByRole('heading', { name: pkg.heading })).toBeVisible();

    // go back to package list for next iteration
    await page.goBack();
  }
});

