import { test, expect } from '@playwright/test';


test.skip("Drag And Drop Test", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    const sourceEle = page.locator('div#draggable');
    const targetEle = page.locator('div#droppable');

    await page.pause();

    // await sourceEle.dragTo(targetEle);
    await page.pause();

    // mouse
    await sourceEle.hover();
    await page.mouse.down();
    await targetEle.hover();
    await page.mouse.up();


});

test("Scroll Test", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    // await page.locator(`//div[@id='draggable']`).scrollIntoViewIfNeeded();


    // await page.locator(`//div[@id='draggable']`).hover();
    await page.mouse.wheel(0, 2000);


});



