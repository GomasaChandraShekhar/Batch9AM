import { test, expect } from '@playwright/test';

test("Handling Single Selection Dropdown", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');

    // await page.pause();

    const countryDrp = page.getByRole('combobox', { name: 'Country:' });

    await countryDrp.selectOption('Canada');
    await countryDrp.selectOption({ value: 'uk' });
    await countryDrp.selectOption({ index: 9 });
    await countryDrp.selectOption({ label: 'France' });

    const options = await countryDrp.getByRole('option').allInnerTexts();
    console.log(options);
    expect.soft(countryDrp.getByRole('option')).toHaveCount(10);

    console.log(`Selected option id country dropdown is :: ${await countryDrp.inputValue()}`);


    await page.close();


});


test.skip("Handling Multi Selection Dropdown", async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const colours = page.getByRole('listbox', { name: 'Colors:' });

    await colours.selectOption('Blue');

    await colours.selectOption(['Blue', 'Red', 'Yellow']);

    await page.close();

});


test.skip("Title 01", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    // await page.getByLabel('Country:').scrollIntoViewIfNeeded();

    // await page.getByRole('combobox', { name: 'Country:' }).selectOption('India');
    // await page.waitForLoadState('domcontentloaded');
    // console.log(await page.getByRole('combobox', { name: 'Country:' }).inputValue());

    // await page.getByLabel('Country:').selectOption('Canada');
    // await page.waitForLoadState('domcontentloaded');
    // console.log(await page.getByLabel('Country:').inputValue());


    const countryDropdown = page.getByRole('combobox', { name: 'Country:' });
    // await page.pause();

    await countryDropdown.scrollIntoViewIfNeeded();

    await countryDropdown.selectOption('India');

    console.log(await countryDropdown.inputValue()); // Returns selected value.

    await countryDropdown.selectOption('Germany');

    console.log(await countryDropdown.inputValue()); // Returns selected value.

    await countryDropdown.selectOption({ label: 'Canada' });
    await countryDropdown.selectOption({ index: 4 });
    await countryDropdown.selectOption({ value: 'brazil' });

    console.log(await countryDropdown.inputValue()); // Returns selected value.

    // to capture all values from dropdown
    // console.log(await countryDropdown.innerText()); // Returns all values from dropdown
    // console.log(await countryDropdown.allTextContents()); // Returns all text contents from dropdown

    const colorsDrp = page.getByRole('listbox', { name: 'Colors:' });

    await colorsDrp.selectOption('Red');
    console.log(await colorsDrp.inputValue()); // Returns selected value.

    await colorsDrp.selectOption(['Blue', 'Yellow', 'White']);
    console.log(await colorsDrp.inputValue());

    const ddOptions = page.locator('#colors').getByRole('option');
    await expect.soft(ddOptions).toHaveCount(7);
    console.log(`AllTextContents :: ${await ddOptions.allTextContents()}`);
    console.log(`All inner texts :: ${await ddOptions.allInnerTexts()}`);

});







