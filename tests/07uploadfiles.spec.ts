import { test, expect } from '@playwright/test';


test.skip("Upload single file", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    await page.locator("#singleFileInput").setInputFiles('./Runningnotes.txt');

    await page.getByRole('button', { name: 'Upload Single File' }).click();

    const fileStatus = page.locator('#singleFileStatus');
    await expect(fileStatus).toBeVisible();

    const fileStatusData = await fileStatus.innerText();

    expect(fileStatusData).toMatch('/Runningnotes.txt/');



});


test.skip("Upload Multiple files", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    await page.pause();

    await page.locator("#multipleFilesInput").setInputFiles(['./Runningnotes.txt', './PlaywrightArchit.jpg']);

    await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

    const fileStatus = page.locator('#multipleFilesStatus');
    await expect(fileStatus).toBeVisible();

    const fileStatusData = await fileStatus.innerText();

    expect(fileStatusData).toMatch('./Runningnotes.txt/');


});

test("Remove Uploaded Files", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForLoadState('domcontentloaded');

    // await page.pause();

    await page.locator("#multipleFilesInput").setInputFiles(['./Runningnotes.txt', './PlaywrightArchit.jpg']);

    await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

    const fileStatus = page.locator('#multipleFilesStatus');

    await expect(fileStatus).toBeVisible();

    await page.locator("#multipleFilesInput").setInputFiles([]);
    await page.getByRole('button', { name: 'Upload Multiple Files' }).click();

    await expect(fileStatus).toBeVisible();
    console.log(await fileStatus.innerText());

    expect(await fileStatus.innerText()).toMatch('No files selected.');


});
