import { test, expect } from '@playwright/test';


test.skip("Handling Tab Test", async ({ page, context }) => {

    await page.goto(`https://demo.automationtesting.in/Windows.html`);
    await page.waitForLoadState('domcontentloaded');

    const parentTabTitle = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle);

    await expect.soft(page).toHaveTitle('Frames & windows');

    await page.locator(`//a[text()='Open New Tabbed Windows ']`).click();

    // promise - pending, rejected, fulfilled
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole('button', { name: 'click' }).click(),
        ]);

    const childPageTitle = await newPage.title();
    console.log("Child tab title is :: ", childPageTitle);

    await expect.soft(newPage).toHaveTitle("Selenium");
    await page.pause();

    if (childPageTitle == "Selenium") {
        await newPage.close();
    }

    await page.bringToFront();

    const parentTabTitle2 = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle2);

    await expect.soft(page).toHaveTitle('Frames & windows');



});


test.skip("Handling Window Test", async ({ page, context }) => {

    await page.goto(`https://demo.automationtesting.in/Windows.html`);
    await page.waitForLoadState('domcontentloaded');

    const parentTabTitle = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle);

    await expect.soft(page).toHaveTitle('Frames & windows');

    // await page.locator(`//a[text()='Open New Seperate Windows']`).click();
    await page.getByText('Open New Seperate Windows').click();

    // promise - pending, rejected, fulfilled
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole('button', { name: 'click' }).click(),
        ]);

    const childPageTitle = await newPage.title();
    console.log("Child tab title is :: ", childPageTitle);

    await expect.soft(newPage).toHaveTitle("Selenium");
    await page.pause();

    if (childPageTitle == "Selenium") {
        await newPage.close();
    }

    await page.bringToFront();

    const parentTabTitle2 = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle2);

    await expect.soft(page).toHaveTitle('Frames & windows');


});


test.skip("Handling Multiple Windows Test", async ({ page, context }) => {

    await page.goto(`https://demo.automationtesting.in/Windows.html`);
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const parentTabTitle = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle);

    await expect.soft(page).toHaveTitle('Frames & windows');

    // await page.locator(`//a[text()='Open Seperate Multiple Windows']`).click();
    await page.getByText('Open Seperate Multiple Windows').click();

    // promise - pending, rejected, fulfilled
    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            page.getByRole('button', { name: 'click' }).click(),
        ]);

    const childPageTitle = await newPage.title();
    console.log("Child tab title is :: ", childPageTitle);

    await expect.soft(newPage).toHaveTitle("Index");
    const emailField = newPage.getByPlaceholder('Email id for Sign Up');

    await expect.soft(emailField).toBeVisible();
    await expect.soft(emailField).toBeEnabled();
    await expect.soft(emailField).toBeEditable();

    if (childPageTitle == "Index") {
        await newPage.close();
    }

    await page.bringToFront();

    const parentTabTitle2 = await page.title();
    console.log("parentTabTitle is :: ", parentTabTitle2);

    await expect.soft(page).toHaveTitle('Frames & windows');


});

test("Handling multiple Tabs Test002", async ({ browser }) => {

    const context = await browser.newContext();
    const parentPage = await context.newPage();

    await parentPage.goto(`https://demo.automationtesting.in/Windows.html`);
    await parentPage.pause();

    const parentpageTitle = await parentPage.title();
    console.log(`Parent Page Title is :: ${parentpageTitle}`);

    await parentPage.getByText('Open Seperate Multiple Windows').click();

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),
            parentPage.getByRole('button', { name: 'click' }).click()

        ]
    )
    await parentPage.waitForTimeout(3000);
    const allPages = context.pages();
    // console.log(allPages.length); //3

    console.log('Title of the Frames page :: ', await allPages[0].title());
    console.log('Title of the Index page :: ', await allPages[1].title());
    console.log('Title of the Selenium page :: ', await allPages[2].title());

    await allPages[1].bringToFront();
    const emailField = allPages[1].getByPlaceholder('Email id for Sign Up');
    await expect.soft(emailField).toBeVisible();

    if (await allPages[1].title() == 'Index') {
        await allPages[1].close();
    }

    await allPages[2].bringToFront();
    await expect.soft(allPages[2].locator('#navbarDropdown')).toBeVisible();

    if (await allPages[2].title() == 'Selenium') {
        await allPages[2].close();
    }

    await parentPage.bringToFront();
    await expect.soft(parentPage.getByText('Open Seperate Multiple Windows')).toBeVisible();

});



