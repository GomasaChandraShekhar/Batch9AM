import { test, expect } from '@playwright/test';

test("Page Navigation Test", async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/login");
    await page.waitForLoadState('domcontentloaded');
    const pageTitle1 = await page.title();
    console.log('First page title is :: ', pageTitle1);

    // await page.pause();

    await page.goto("https://playwright.dev/");
    await page.waitForLoadState('domcontentloaded');
    const pageTitle2 = await page.title();
    console.log('Second page title is :: ', pageTitle2);

    expect.soft(pageTitle1).not.toBe(pageTitle2);

    await page.goBack(); // Navigate back to previous page
    await page.waitForLoadState('domcontentloaded');
    expect.soft(await page.title()).toBe(pageTitle1);

    await page.goForward(); // Navigate next page
    await page.waitForLoadState('domcontentloaded');
    expect.soft(await page.title()).toContain(pageTitle2);

    await page.reload(); // Reload the current page

    await page.close();

});






