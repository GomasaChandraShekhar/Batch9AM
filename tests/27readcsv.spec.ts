import { test, expect } from '@playwright/test';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

const csvFile = 'testdata/data.csv';
const csvdata = fs.readFileSync(csvFile, 'utf-8');
const loginData: any = parse(csvdata, { columns: true, skip_empty_lines: true });

test.describe("Verify Login", () => {

    for (const { sno, email, password, validity } of loginData) {

        test(`Login Test for ${sno}`, async ({ page }) => {
            await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
            await page.waitForTimeout(2000);
            // await page.pause();

            await page.locator('#userEmail').fill(email);
            await page.locator('#userPassword').fill(password);
            await page.locator('#login').click();

            if (validity == 'valid') {
                await page.waitForTimeout(2000);
                await expect.soft(page.getByRole('button', { name: 'HOME' })).toBeVisible();
                await expect.soft(page.getByText('Automation Practice')).toBeVisible();
                const signOutButton = page.getByRole('button', { name: 'Sign Out' });
                await expect.soft(signOutButton).toBeVisible();
                await signOutButton.click();
            }
            else if (validity == 'invalid') {
                const errorMessage = page.locator('div#toast-container');
                await expect.soft(errorMessage).toBeVisible();
                console.log(await errorMessage.innerText());
            }
            await page.waitForTimeout(2000);
            await page.close();

        });
    }

});

