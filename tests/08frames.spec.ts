import { test, expect } from '@playwright/test';

test.skip("Handling frame using url", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    // Locate frame using url
    const frame1 = page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' });
    await frame1?.locator('//input[@name="mytext1"]').fill("Playwright");
});



test.skip("Handling Frame using locator", async ({ page }) => {

    await page.goto(`https://jqueryui.com/tooltip/`);
    await page.pause();

    // Locating frame using locator
    const frameEle = page.frameLocator('.demo-frame');
    await frameEle.locator(`#age`).fill('30');

});

test("Handling Nested Frames", async ({ page }) => {

    await page.goto(`https://ui.vision/demo/webtest/frames/`);
    await page.pause();

    // locating frame using url
    const parentFrame = page.frame({ url: `https://ui.vision/demo/webtest/frames/frame_3.html` });

    const childFrames = parentFrame?.childFrames();
    await childFrames?.at(0)?.locator('.AB7Lab').nth(1).check();

    await page.close();

});

test.skip("Handling Tooltip", async ({ page }) => {

    await page.goto(`https://jqueryui.com/tooltip/`);
    await page.pause();

    // Locating frame using locator
    const frameElement = page.frameLocator(`.demo-frame`);
    const tooltip = await frameElement.locator(`#age`).getAttribute('title');
    console.log(tooltip);

    await page.close();

});



