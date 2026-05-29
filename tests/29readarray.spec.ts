import { test, expect } from '@playwright/test';

/*
test(`Click on link`, async ({ page }) => {
    await page.goto('https://demowebshop.tricentis.com/');
    // await page.pause();
    await page.waitForTimeout(3000);

    const link = page.getByRole('link', { name: 'Books', exact: true }).first();
    const heading = page.getByRole('heading', { name: 'Books', exact: true }).first();

    await link.click();
    await expect.soft(heading).toBeVisible();
    await page.waitForTimeout(2000);
    await page.close();

});
*/
// Read data from one dimensional array
/*
const titles: string[] = ['Books', 'Computers', 'Electronics', 'Jewelry', 'Gift Cards'];

test.describe("Verify links", () => {

    for (const title of titles) {

        test(`Click on ${title} link`, async ({ page }) => {
            await page.goto('https://demowebshop.tricentis.com/');
            // await page.pause();
            await page.waitForTimeout(3000);

            const link = page.getByRole('link', { name: title, exact: true }).first();
            const heading = page.getByRole('heading', { name: title, exact: true }).first();

            await link.click();
            await expect.soft(heading).toBeVisible();
            await page.waitForTimeout(3000);
            await page.close();
        });
    }
});
*/

// Read data from two dimensional array

const loginData: string[][] = [
    ['Data1', 'gomasachandrashekhar@gmail.com', 'Gomasa@1988', 'valid'],
    ['Data2', 'gomasachandra@gmail.com', 'Gomasa@1988', 'invalid'],
    ['Data3', 'gomasachandrashekhar@gmail.com', 'Gomasa@198811', 'invalid']
];

test.describe("Verify login", async () => {

    for (const [data, email, password, flag] of loginData) {

        test(`Login Test for ${data} `, async ({ page }) => {
            await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
            await page.waitForTimeout(2000);
            // await page.pause();

            await page.locator('#userEmail').fill(email);
            await page.locator('#userPassword').fill(password);
            await page.locator('#login').click();

            if (flag == 'valid') {
                await page.waitForTimeout(2000);
                await expect.soft(page.getByRole('button', { name: 'HOME' })).toBeVisible();
                await expect.soft(page.getByText('Automation Practice')).toBeVisible();
                const signOutButton = page.getByRole('button', { name: 'Sign Out' });
                await expect.soft(signOutButton).toBeVisible();
                await signOutButton.click();
            }
            else if (flag == 'invalid') {
                const errorMessage = page.locator('div#toast-container');
                await expect.soft(errorMessage).toBeVisible();
                console.log(await errorMessage.innerText());
            }
            await page.waitForTimeout(2000);
            await page.close();
        });
    }
});


/*
test(`Login Test`, async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await page.waitForTimeout(3000);
    // await page.pause();

    await page.locator('#userEmail').fill('gomasachandrashekhar@gmail.com');
    await page.locator('#userPassword').fill('Gomasa@1988123');
    await page.locator('#login').click();

    // await page.waitForTimeout(3000);
    // await expect.soft(page.getByRole('button', { name: 'HOME' })).toBeVisible();
    // await expect.soft(page.getByText('Automation Practice')).toBeVisible();
    // const signOutButton = page.getByRole('button', { name: 'Sign Out' });
    // await expect.soft(signOutButton).toBeVisible();
    // await signOutButton.click();

    const errorMessage = page.locator('div#toast-container');
    await expect.soft(errorMessage).toBeVisible();
    console.log(await errorMessage.innerText());
    await page.waitForTimeout(3000);
    await page.close();

});
*/
