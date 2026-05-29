import { test, expect } from '@playwright/test';
import { log } from 'node:console';


test("Handling Simple Alerts", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();
    page.on('dialog', async dialog => {
        console.log('Dialog message is :: ', dialog.message());
        console.log('Dialog type is :: ', dialog.type());
        expect.soft(dialog.message()).toBe('I am a JS Alert');
        expect.soft(dialog.type()).toBe('alert');
        await dialog.accept();
    });
    await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    await page.pause();

});

test("Handling Confirmation Alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();
    page.on('dialog', async dialog => {
        console.log('Dialog message is :: ', dialog.message());
        console.log('Dialog type is :: ', dialog.type());
        expect.soft(dialog.message()).toBe('I am a JS Confirm');
        expect.soft(dialog.type()).toBe('confirm');
        await dialog.accept(); // to click OK
        // await dialog.dismiss(); // to click cancel
    });
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    await page.pause();
});

test("Handling Prompt Alert", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.waitForLoadState('domcontentloaded');
    await page.pause();
    page.on('dialog', async dialog => {
        console.log('Dialog message is :: ', dialog.message());
        console.log('Dialog type is :: ', dialog.type());
        expect.soft(dialog.message()).toBe('I am a JS prompt');
        expect.soft(dialog.type()).toBe('prompt');

        // When Click Ok
        await dialog.accept('Hello Playwright');
        expect.soft(await page.locator(`#result`).textContent()).toBe(`You entered: Hello Playwright`);

        // When Click Cancel
        // await dialog.dismiss();
        // expect.soft(await page.locator(`#result`).textContent()).toBe(`You entered: null`);
    });
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click();
    await page.pause();
});