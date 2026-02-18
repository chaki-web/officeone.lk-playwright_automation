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

  test('Verify that button redirects to the Packages section', async ({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-colombo/');
    await page.getByRole('link', { name: 'OUR PACKAGES' }).click();
    await expect(page.locator('#HotDesk, #SingleCabin, #MeetingRoom').first()).toBeVisible();
  });

  test('Verify that each package is listed', async ({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-colombo/');

    // Click OUR PACKAGES to scroll to the packages section
    await page.getByRole('link', { name: 'OUR PACKAGES' }).click();

    const packages = [
      { name: 'Hot Desk', href: '#HotDesk' },
      { name: 'Single Cabin', href: '#SingleCabin' },
      { name: 'Meeting Room', href: '#MeetingRoom' },
    ];

    for (const pkg of packages) {
      // Verify each package tab link exists with correct text
      const link = page.locator(`a[href="${pkg.href}"]`).first();
      await expect(link).toBeVisible();
      await expect(link).toContainText(pkg.name);
    }
  });

  test('Verify that book now functionality works', async ({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-colombo/');
    await page.getByRole('link', { name: 'OUR PACKAGES' }).click();

    // Hot Desk - Book Now
    await page.getByRole('link', { name: 'Hot Desk' }).first().click();
    await page.locator('#HotDesk').getByRole('link', { name: 'Book Now' }).click();
    await expect(page.getByText('Your Workspace Awaits')).toBeVisible();
    await page.getByRole('button', { name: 'Close' }).click();

    // Single Cabin - Book Now
    await page.getByRole('link', { name: 'Single Cabin' }).first().click();
    await page.locator('#SingleCabin').getByRole('link', { name: 'Book Now' }).click();
    await expect(page.getByText('Your Workspace Awaits')).toBeVisible();
    await page.getByRole('button', { name: 'Close' }).click();

    // Meeting Room - Book Now
    await page.getByRole('link', { name: 'Meeting Room' }).first().click();
    await page.locator('#MeetingRoom').getByRole('link', { name: 'Book Now' }).click();
    await expect(page.getByText('Your Workspace Awaits')).toBeVisible();
    await page.getByRole('button', { name: 'Close' }).click();
  });

  test.only('Verify Gallery section successfuly loads', async ({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-colombo/');
    await expect(page.locator('div').filter({ hasText: 'Explore Our Gallery' }).first()).toBeVisible();
  });
  
});
