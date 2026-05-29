import { test, expect } from '@playwright/test';

test("Handling auto suggestions", async ({ page }) => {

    await page.goto("https://www.google.com/");
    await page.pause();

    await page.locator('#APjFqb').fill('Playwright');
    await page.waitForLoadState('domcontentloaded');

    const suggestions = page.locator(`//ul[@class="G43f7e"]//li`);

    // for of loop
    for (const sugg of await suggestions.all()) {
        if (await sugg.innerText() == 'playwright mcp') {
            await sugg.click();
            break;
        }
    }
    const links = page.locator(`//a[@class="zReHs"]`);
    await links.nth(2).click();


    await page.close();

});



