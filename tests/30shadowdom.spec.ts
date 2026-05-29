import { test } from '@playwright/test';

test("Handling shadow dom elements", async ({ page }) => {
    /*
        await page.goto("https://selectorshub.com/xpath-practice-page/");
        await page.pause();
    
        const shadowDom = page.locator('#userName');
    
        const field1 = shadowDom.locator('#kils');
    
        await field1.scrollIntoViewIfNeeded();
    
        await field1.fill('Playwright');
    */


    // frames inside shadow dom

    await page.goto("https://selectorshub.com/iframe-in-shadow-dom/");
    await page.pause();

    const shadowDom = page.locator('#userName');

    const field1 = shadowDom.locator('#kils');

    await field1.scrollIntoViewIfNeeded();

    await field1.fill('Playwright');

    const frame1 = shadowDom.frameLocator("#pact1");

    const currentCrush = frame1.locator('#jex');

    await currentCrush.fill('Playwright');

    const frame2 = frame1.frameLocator('#pact3');

    const destiny = frame2.locator('#glaf');

    await destiny.fill('Destiny');



});

