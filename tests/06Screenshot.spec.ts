import { test, expect } from '@playwright/test';

test("Capture screnshot of page", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    await page.waitForTimeout(5000);

    // await page.pause();

    await page.screenshot({ path: './images/pgscreenshot.png' });

    await page.screenshot({ path: `./images/fullpgscreenshot.png`, fullPage: true });
    await page.waitForTimeout(5000);
    expect.soft(await page.screenshot({ path: `./images/fullpgscreenshot_${Date.now()}.png`, fullPage: true })).toMatchSnapshot({ path: './images/fullpgscreenshot.png', fullPage: true });

    await page.close();

});

