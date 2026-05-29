import { test, expect } from '@playwright/test';

test("Handling Text Field 001", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
    page.waitForLoadState("domcontentloaded");
    await page.pause();

    // await page.getByRole('textbox', { name: 'Enter Name' }).click();
    // await page.getByPlaceholder('Enter Name').fill('Playwright');
    // const inputData = await page.getByPlaceholder('Enter Name').inputValue();
    // console.log("Before clear :: ", inputData);
    // await page.getByRole('textbox', { name: 'Enter Name' }).clear();
    // console.log("After clear :: ", await page.getByPlaceholder('Enter Name').inputValue());

    console.log(await page.getByText('List item 1').innerText());
    await page.getByLabel('Email Address:').fill('avcnjdfgdgj@gmail.com');
    console.log(await page.getByAltText('logo image').getAttribute('src'));
    console.log(await page.getByTitle('Tooltip text').innerText());
    await page.getByTestId('edit-profile-btn').click();


});





