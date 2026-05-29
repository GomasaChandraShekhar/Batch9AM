import { test, expect } from '@playwright/test';
import fs from 'fs';

const jsonFile = 'testdata/data.json';
const loginData: any = JSON.parse(fs.readFileSync(jsonFile, 'utf-8'));

test.describe(`Verify Login`, () => {

    for (const { id, email, password, validity } of loginData) {

        test(`Login Test for ${id} `, async ({ page }) => {
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



