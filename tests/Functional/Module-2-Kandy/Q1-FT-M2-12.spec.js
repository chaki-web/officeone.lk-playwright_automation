import { test, expect } from '@playwright/test';

test('Verify Reviews can expand and shrink', async ({ page }) => {
  await page.goto('https://officeone.lk/office-one-kandy/');    
  await expect(page.getByText('Our Happy Clients! Office One')).toBeVisible();
  await expect(page.getByText('shehan athapattu 6 days ago Great place to work even if you are an introvert')).toBeVisible();
  await expect(page.getByText('Great place to work even if')).toBeVisible();
  await page.getByText('shehan athapattu 6 days ago Great place to work even if you are an introvert').click();
  await expect(page.locator('#post-2914')).toMatchAriaSnapshot(`
    - paragraph:
      - text: /Great place to work even if you are an introvert like me\\. There are other poeople working, but you wouldnt feel bothered at all\\. Really nice staff and clean environment\\. Internet is fast too\\. It only cost me rs \\d+ for the whole day\\. There are lots of places to get food as well\\. I highly recommend this place\\./
      - img "👍"
    `);
  await page.getByText('Great place to work even if').click();
});