import { test, expect } from '@playwright/test';

/* 
1. Add Screen shot picture and video - Done
2. Add a module for login and hide user credentails - WIP - Now hide url + concate.
3. Second Test Add Visual Testing
4. Disable other tests and then clean
5. Add to pipeline
6. Learn how to dockerise
7. Terrafrom

 */

test('Product Cloud Products GraphQL Page Loads', async ({ page }) => {

    //https://playwright.dev/docs/test-auth#reuse-signed-in-state
    //https://playwright.dev/docs/test-parameterize#passing-environment-variables

    // Go to https://thng-dashboard-evtci.elastic.evrythng.net/login
    await page.goto('https://thng-dashboard-evtci.elastic.evrythng.net/login');

    // Click [aria-label="Cookie Preferences"] >> text=Accept all cookies
    await page.locator('[aria-label="Cookie Preferences"] >> text=Accept all cookies').click();

    // Click input[name="email"]
    await page.locator('input[name="email"]').click();

    // Fill input[name="email"]
    await page.locator('input[name="email"]').fill(process.env.LOGIN_USERNAME);

    // Press Tab
    await page.locator('input[name="email"]').press('Tab');

    // Fill input[name="password"]
    await page.locator('input[name="password"]').fill(process.env.LOGIN_PASSWORD);

    // Click text=Login
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://thng-dashboard-evtci.elastic.evrythng.net/dashboards/overview?from=1647994290666&to=1648681199999' }*/),
        page.locator('text=Login').click()
    ]);
    // Click [aria-label="User menu"]
    await page.locator('[aria-label="User menu"]').click();
    // Click text=Product Cloud
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://thng-dashboard-evtci.elastic.evrythng.net/product-cloud/adi-orders' }*/),
        page.locator('text=Product Cloud').click()
    ]);
    // Click text=Products
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://thng-dashboard-evtci.elastic.evrythng.net/product-cloud/products' }*/),
        page.locator('text=Products').click()
    ]);
    // Click text=Select a filter
    await page.locator('text=Select a filter').click();
    // Click #menu- div >> nth=0
    await page.locator('#menu- div').first().click();
    // Click text=ProductThngs
    await page.locator('text=ProductThngs').click();
    await expect(page).toHaveURL('https://thng-dashboard-evtci.elastic.evrythng.net/product-cloud/products?orderBy.0.field=name&orderBy.0.sort=asc');
});

test.describe('Product Cloud Consumer Page', () => {

    test.skip('Consumer Page - Scans Dashboard', async ({ page }) => {
        // Go to https://thng-dashboard-evtci.elastic.evrythng.net/login
        await page.goto('https://thng-dashboard-evtci.elastic.evrythng.net/login');
        // Click [aria-label="Cookie Preferences"] >> text=Accept all cookies
        await page.locator('[aria-label="Cookie Preferences"] >> text=Accept all cookies').click();
        // Click input[name="email"]
        await page.locator('input[name="email"]').click();
        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill('charles@evrythng.com');
        // Press Tab
        await page.locator('input[name="email"]').press('Tab');
        // Fill input[name="password"]
        await page.locator('input[name="password"]').fill('Password');
        // Click text=Login
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://thng-dashboard-evtci.elastic.evrythng.net/dashboards/quick-start' }*/),
            page.locator('text=Login').click()
        ]);
        // Click [aria-label="User menu"]
        await page.locator('[aria-label="User menu"]').click();
        // Click button[role="menuitem"]:has-text("Amplify Stage Test Account")
        await page.locator('button[role="menuitem"]:has-text("Amplify Stage Test Account")').click();
        // Click [aria-label="User menu"]
        await page.locator('[aria-label="User menu"]').click();
        // Click text=Product Cloud
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://thng-dashboard-evtci.elastic.evrythng.net/product-cloud/adi-orders' }*/),
            page.locator('text=Product Cloud').click()
        ]);
        // Click text=Consumer Engagement >> nth=0
        await page.locator('text=Consumer Engagement').first().click();
        await expect(page).toHaveURL('https://thng-dashboard-evtci.elastic.evrythng.net/product-cloud/consumer-engagement');
        // Click text=Scans by date
        await page.frameLocator('[data-testid="looker"]').first().locator('text=Scans by date').click();
    });


    test.skip('Consumer Engagement Locations Dashboard', async ({ page }) => {
        // Go to https://thng-dashboard-evtci.elastic.evrythng.net/login?redirect_uri=https:%2F%2Fthng-dashboard-evtci.elastic.evrythng.net%2Fproduct-cloud%2Fconsumer-engagement%2Fdashboard%3Fname%3DAll%2520scan%2520activity%26tab%3D1
        await page.goto('https://thng-dashboard-evtci.elastic.evrythng.net/login?redirect_uri=https:%2F%2Fthng-dashboard-evtci.elastic.evrythng.net%2Fproduct-cloud%2Fconsumer-engagement%2Fdashboard%3Fname%3DAll%2520scan%2520activity%26tab%3D1');
        // Click input[name="email"]
        await page.locator('input[name="email"]').click();
        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill('charles@evrythng.com');
        // Press Tab
        await page.locator('input[name="email"]').press('Tab');
        // Fill input[name="password"]
        await page.locator('input[name="password"]').fill('Evt01!!??');
        // Press Enter
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://thng-dashboard-evtci.elastic.evrythng.net/product-cloud/consumer-engagement/dashboard?name=All%20scan%20activity&tab=1' }*/),
            page.locator('input[name="password"]').press('Enter')
        ]);
        // Click [aria-label="Cookie Preferences"] >> text=Accept all cookies
        await page.locator('[aria-label="Cookie Preferences"] >> text=Accept all cookies').click();
        // Click text=Scan locations
        await page.frameLocator('[data-testid="looker"]').nth(1).locator('text=Scan locations').click();
        // Click text=Consumer Engagementchevron_rightAll scan activityscanslocationsproductsusers >> button >> nth=4
        await page.locator('text=Consumer Engagementchevron_rightAll scan activityscanslocationsproductsusers >> button').nth(4).click();
    });

    test.skip('Consumer Engagement Products Page Load', async ({ page }) => {
        await page.goto('https://thng-dashboard-evtci.elastic.evrythng.net/login?redirect_uri=https:%2F%2Fthng-dashboard-evtci.elastic.evrythng.net%2Fproduct-cloud%2Fconsumer-engagement%2Fdashboard%3Fname%3DAll%2520scan%2520activity%26tab%3D2');
        // Click [aria-label="Cookie Preferences"] >> text=Accept all cookies
        await page.locator('[aria-label="Cookie Preferences"] >> text=Accept all cookies').click();
        // Click input[name="email"]
        await page.locator('input[name="email"]').click();
        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill('charles@evrythng.com');
        // Press Tab
        await page.locator('input[name="email"]').press('Tab');
        // Fill input[name="password"]
        await page.locator('input[name="password"]').fill('Evt01!!??');
        // Press Enter
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://thng-dashboard-evtci.elastic.evrythng.net/product-cloud/consumer-engagement/dashboard?name=All%20scan%20activity&tab=2' }*/),
            page.locator('input[name="password"]').press('Enter')
        ]);
        // Click text=Top products
        await page.frameLocator('[data-testid="looker"]').nth(2).locator('text=Top products').click();
    });

    test.fixme('Consumer Engagement Users Page Load', async ({ page }) => {
        // Go to https://thng-dashboard-evtci.elastic.evrythng.net/login?redirect_uri=https:%2F%2Fthng-dashboard-evtci.elastic.evrythng.net%2Fproduct-cloud%2Fconsumer-engagement%2Fdashboard%3Fname%3DAll%2520scan%2520activity%26tab%3D3
        await page.goto('https://thng-dashboard-evtci.elastic.evrythng.net/login?redirect_uri=https:%2F%2Fthng-dashboard-evtci.elastic.evrythng.net%2Fproduct-cloud%2Fconsumer-engagement%2Fdashboard%3Fname%3DAll%2520scan%2520activity%26tab%3D3');
        // Click [aria-label="Cookie Preferences"] >> text=Accept all cookies
        await page.locator('[aria-label="Cookie Preferences"] >> text=Accept all cookies').click();
        // Click input[name="email"]
        await page.locator('input[name="email"]').click();
        // Fill input[name="email"]
        await page.locator('input[name="email"]').fill('charles@evrythng.com');
        // Press Tab
        await page.locator('input[name="email"]').press('Tab');
        // Fill input[name="password"]
        await page.locator('input[name="password"]').fill('Evt01!!??');
        // Press Enter
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://thng-dashboard-evtci.elastic.evrythng.net/product-cloud/consumer-engagement/dashboard?name=All%20scan%20activity&tab=3' }*/),
            page.locator('input[name="password"]').press('Enter')
        ]);
        // Click text=Scans by operating system
        await page.frameLocator('[data-testid="looker"]').nth(3).locator('text=Scans by operating system').click();
    });
});

  //https://theqalead.com/tools/best-email-testing-tools/
