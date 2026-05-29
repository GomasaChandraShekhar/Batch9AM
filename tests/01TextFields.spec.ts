import { test, expect } from '@playwright/test';


test.skip("Handling Text Field 001", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    page.waitForLoadState("domcontentloaded");

    await page.getByPlaceholder('Enter Name').fill('Playwright');

    console.log("Before clear :: ", await page.getByPlaceholder('Enter Name').inputValue());

    await page.getByRole('textbox', { name: 'Enter Name' }).clear();

    console.log("After clear :: ", await page.getByPlaceholder('Enter Name').inputValue());

});


test.skip("Handling Text Fields 002", async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/login');

    // await page.getByRole('textbox', { name: 'Username:' }).fill('Verify text role');
    // await page.getByRole('button', { name: 'Primary Action' }).click();
    // await page.getByRole('link', { name: 'Home' }).nth(3).click();
    // await page.getByText('Submit Form').click();
    await page.getByLabel('Email:').fill('Email001@gmail.com');
    await page.getByLabel('Password:').fill('Password001');
    //await page.getByPlaceholder('Enter your full name').fill('FullName001');
});

test('Handle Text Field Enter Name', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState("domcontentloaded");

    // await page.pause(); // Opens up inspector - debugging

    await page.locator('css = #name').fill('Playwright');

    const nameEntered = await page.locator('css = #name').inputValue();
    console.log('Before clear data :: ', nameEntered);

    await page.locator('css = #name').clear();

    const nameEnteredCleared = await page.locator('css = #name').inputValue();
    console.log('After clear data :: ', nameEnteredCleared);

    // await page.locator('css = #name').pressSequentially('Playwright');

    // await page.pause();


    // await page.getByRole('link', { name: 'Home' }).nth(2).click(); // 3 links - [0, 1, 2]




});



