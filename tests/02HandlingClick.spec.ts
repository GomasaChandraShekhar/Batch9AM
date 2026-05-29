import { test } from '@playwright/test';

test("Verify Click", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    // General click
    // await page.locator('#name').click();

    // Force Click
    // await page.locator('#country').click({ force: true });

    // Double click
    // await page.locator('//h1[@class="title"]').dblclick();

    // Right Click - Context Click
    // await page.locator('//h1[@class="title"]').click({ button: 'right' });

    // await page.locator('//h1[@class="title"]').click({ modifiers: ['Control'] });

    // await page.locator('//h1[@class="title"]').click({ position: { x: 100, y: 0 } });
    // await page.locator('//a[text()="PlaywrightPractice"]').click({ position: { x: 100, y: 0 } });

    await page.getByRole('textbox', { name: 'Enter Name' }).fill('Playwright');

    await page.close();






});


