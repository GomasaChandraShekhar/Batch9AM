import { test, expect } from '@playwright/test';

test("Handling Radio Button", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    await page.locator('#male').check();
    expect.soft(page.locator('#male')).toBeChecked();

    await page.locator('#female').check();
    expect.soft(page.locator('#female')).toBeChecked();

    expect.soft(page.locator('#male')).not.toBeChecked();
    await page.pause();
    await page.close();

});

test("Handling Checkbox", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');
    // await page.pause();

    await page.locator('#sunday').check();
    expect.soft(page.locator('#sunday')).toBeChecked();

    await page.locator('#monday').check();
    expect.soft(page.locator('#monday')).toBeChecked();

    await page.locator('#tuesday').check();
    expect.soft(page.locator('#tuesday')).toBeChecked();

    await page.locator('#wednesday').check();
    expect.soft(page.locator('#wednesday')).toBeChecked();

    expect.soft(page.locator('#saturday')).not.toBeChecked();

    await page.pause();
    await page.close();

});






