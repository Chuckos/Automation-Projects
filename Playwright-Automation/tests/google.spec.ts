import { test, expect } from '@playwright/test';

test('google search test', async ({ page }) => {
    await page.goto('https://google.com');
    await page.locator('button:has-text("I agree")').click();
    // Click [aria-label="Search"]
    await page.locator('[aria-label="Search"]').click();
    // Fill [aria-label="Search"]
    await page.locator('[aria-label="Search"]').fill('playwright');

    // Press Enter
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://www.google.com/search?q=playwright&source=hp&ei=Y-tAYsTRLdST8gKtlY3QDg&iflsig=AHkkrS4AAAAAYkD5czVseeRWUrwNvvS3S9ZpTSbHhOze&ved=0ahUKEwiEj4u-sef2AhXUiVwKHa1KA-oQ4dUDCAo&uact=5&oq=playwright&gs_lcp=Cgdnd3Mtd2l6EAMyCAgAEIAEELEDMggIABCABBCxAzIFCAAQgAQyCwguEIAEEMcBEK8BMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOg4IABCPARDqAhCMAxDlAjoICC4QgAQQsQM6CwgAEIAEELEDEIMBOg4ILhCABBCxAxDHARCjAjoLCC4QgAQQxwEQowI6DgguEIAEELEDEIMBENQCOggILhCxAxCDAToRCC4QgAQQsQMQgwEQxwEQ0QM6DgguEIAEELEDEMcBENEDOggIABCABBDJAzoFCAAQkgM6BQguEIAEOg4IABCABBCxAxCDARDJA1CppQFYnbwBYIHRAWgBcAB4AIABUogB_ASSAQIxMJgBAKABAbABCg&sclient=gws-wiz' }*/),
        page.locator('[aria-label="Search"]').press('Enter')
    ]);

    // Click text=Playwright: Fast and reliable end-to-end testing for modern ...
    await page.locator('text=Playwright: Fast and reliable end-to-end testing for modern ...').click();
    await expect(page).toHaveURL('https://playwright.dev/');


});