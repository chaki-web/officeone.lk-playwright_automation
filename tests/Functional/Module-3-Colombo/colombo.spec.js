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

  test.only('Navigate to Office One Kandy and verify heading', async ({ page }) => {
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

  test('Verify Gallery section successfuly loads', async ({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-colombo/');
    await expect(page.locator('div').filter({ hasText: 'Explore Our Gallery' }).first()).toBeVisible();
  });

  test('Verify Reviews are visible ', async ({ page }) => {
    await page.goto('https://officeone.lk/office-one-colombo/');
    await expect(page.getByText('Our Happy Clients!')).toBeVisible();
  });

  //without tester letting the locator identify the component its not passing!!!
  test('Verify reviewes can Expand or Shrink', async({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-colombo/');
    await page.getByText('shehan athapattu 2025-02-10 Trustindex verifies that the original source of the').click();
    await page.getByText('Crystal 2024-12-06 Trustindex').click();
    await expect(page.getByText('Crystal 2024-12-06 Trustindex')).toBeVisible();
    await page.getByRole('button', { name: 'Read more' }).nth(1).click();
    await expect(page.getByText('Crystal 2024-12-06 Trustindex')).toBeVisible();
    await page.locator('span').filter({ hasText: 'Hide' }).first().click();
  });

  test('Footer link functionality', async ({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-colombo/');
    await page.locator('#menu-item-2916').getByRole('link', { name: 'Office One Colombo' }).click();
    await expect(page.getByRole('heading', { name: 'OFFICEONE COLOMBO' })).toBeVisible();
    await page.locator('#colophon').getByRole('link', { name: 'Home' }).click();
    await expect(page.getByRole('heading', { name: 'WELCOME TO OFFICE ONE' })).toBeVisible();
    await page.locator('#colophon').getByRole('link', { name: 'Office One Kandy' }).click();
    await expect(page.getByRole('heading', { name: 'OFFICE ONE KANDY', exact: true })).toBeVisible();
    await page.goto('https://www.officeone.lk/office-one-colombo/');
    await page.locator('#colophon').getByRole('link', { name: 'Office One Colombo' }).click();
    await expect(page.getByRole('heading', { name: 'OFFICEONE COLOMBO' })).toBeVisible();
  });

  test('Book Now box and map section should be visible', async ({ page }) => {
    await page.goto('https://officeone.lk/office-one-colombo/', { waitUntil: 'domcontentloaded' });

    // Scroll to the bottom of the page first (ensures footer content loads)
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // --- Book Now box ---
    const bookNowBox = page.getByRole('heading', { name: 'Send us a message' });
    await bookNowBox.waitFor({ state: 'visible' });
    await expect(bookNowBox).toBeVisible();

    // --- Map section text ---
    const findUsText = page.getByText('Find Us', { exact: true });
    await findUsText.scrollIntoViewIfNeeded();
    await findUsText.waitFor({ state: 'visible' });
    await expect(findUsText).toBeVisible();
  });

  test('Verify book now form loads correctly', async ({ page }) => {
    await page.goto('https://officeone.lk/office-one-colombo/');
    await page.locator('#HotDesk').getByRole('link', { name: 'Book Now' }).click();
    await expect(page.getByText('Your Workspace Awaits')).toBeVisible();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.locator('#SingleCabin').getByRole('link', { name: 'Book Now' }).click();
    await expect(page.getByText('Your Workspace Awaits')).toBeVisible();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.locator('#MeetingRoom').getByRole('link', { name: 'Book Now' }).click();
    await expect(page.getByText('Your Workspace Awaits')).toBeVisible();
    await page.getByRole('button', { name: 'Close' }).click();
  });

  test('Verify book now form validation with empty fields', async ({ page }) => {
    await page.goto('https://officeone.lk/office-one-kandy/');
    await page.locator('#ceocabin').getByRole('link', { name: 'Book Now' }).click();
    await page.getByRole('button', { name: 'Book Now' }).click();
    await expect(page.getByText('This field is required').first()).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^EmailThis field is required$/ }).getByRole('alert')).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^Office One Center Kandy ColomboThis field is required$/ }).getByRole('alert')).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^SubjectThis field is required$/ }).getByRole('alert')).toBeVisible();
    await expect(page.locator('div').filter({ hasText: /^MessageThis field is required$/ }).getByRole('alert')).toBeVisible();
  });

  test('Verify book now form validation with empty name field', async ({ page }) => {
    await page.goto('https://officeone.lk/office-one-colombo/');
    await page.locator('#HotDesk').getByRole('link', { name: 'Book Now' }).click();
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('sufferunicontact@gmail.com');
    await page.getByRole('radio', { name: 'Colombo' }).check();
    // Wait for the dropdown to be ready, then select the Hot Desk Daily option
    const dropdown = page.locator('#ff_5_dropdown_1');
    await dropdown.waitFor({ state: 'visible' });
    // Log available options for debugging
    const options = await dropdown.locator('option').allTextContents();
    console.log('Available dropdown options:', options);
    // Select the option containing "Hot Desk" and "Daily"
    const hotDeskOption = await dropdown.locator('option').filter({ hasText: 'Hot Desk' }).filter({ hasText: 'Daily' }).getAttribute('value');
    await dropdown.selectOption(hotDeskOption);
    await page.getByRole('textbox', { name: 'Subject' }).click();
    await page.getByRole('textbox', { name: 'Subject' }).fill('test');
    await page.getByRole('textbox', { name: 'Message' }).click();
    await page.getByRole('textbox', { name: 'Message' }).fill('test');
    await page.getByRole('button', { name: 'Book Now' }).click();
    await expect(page.getByText('This field is required')).toBeVisible();
  });
  
  test('Verify book now form validation with radio button not selected', async ({ page }) => {
    await page.goto('https://officeone.lk/office-one-colombo/');
    await page.locator('#HotDesk').getByRole('link', { name: 'Book Now' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).fill('testone');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('sufferunicontact@gmail.com');
    await page.getByRole('textbox', { name: 'Subject' }).click();
    await page.getByRole('textbox', { name: 'Subject' }).fill('test');
    await page.getByRole('textbox', { name: 'Message' }).click();
    await page.getByRole('textbox', { name: 'Message' }).fill('test');
    await page.getByRole('button', { name: 'Book Now' }).click();
    await expect(page.getByText('This field is required')).toBeVisible();
  });

  test('Verify book now form validation with empty package field', async ({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-colombo/');
    await page.locator('#HotDesk').getByRole('link', { name: 'Book Now' }).click();
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
    await expect(page.getByLabel('Your Workspace Awaits – Book').getByText('Packages- Select -Hot Desk')).toBeVisible();
  });

  test('Verify book now form validation with empty message field', async ({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-kandy/');
    await page.locator('#ceocabin').getByRole('link', { name: 'Book Now' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).fill('testone');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('sufferunicontact@gmail.com');
    await page.getByRole('radio', { name: 'Kandy' }).check();
    await page.locator('#ff_5_dropdown').selectOption('CEO Cabin - 3,500.00 ( 1 Hour )');
    await page.getByRole('textbox', { name: 'Subject' }).click();
    await page.getByRole('textbox', { name: 'Subject' }).fill('test');
    await page.getByRole('button', { name: 'Book Now' }).click();
    await expect(page.getByText('MessageThis field is required')).toBeVisible();
  });

  test('Verify successful submission', async ({ page }) => {
    await page.goto('https://www.officeone.lk/office-one-colombo/');
    await page.locator('#HotDesk').getByRole('link', { name: 'Book Now' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).click();
    await page.getByRole('textbox', { name: 'Name *' }).fill('testone');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('sufferunicontact@gmail.com');
    await page.getByRole('radio', { name: 'Colombo' }).check();
    const dropdown = page.locator('#ff_5_dropdown_1');
    await dropdown.waitFor({ state: 'visible' });
    const options = await dropdown.locator('option').allTextContents();
    console.log('Available dropdown options:', options);
    const hotDeskOption = await dropdown.locator('option').filter({ hasText: 'Hot Desk' }).filter({ hasText: 'Daily' }).getAttribute('value');
    await dropdown.selectOption(hotDeskOption);
    await page.getByRole('textbox', { name: 'Subject' }).click();
    await page.getByRole('textbox', { name: 'Subject' }).fill('test');
    await page.getByRole('textbox', { name: 'Message' }).click();
    await page.getByRole('textbox', { name: 'Message' }).fill('test');
    await page.getByRole('button', { name: 'Book Now' }).click();
  });
})
