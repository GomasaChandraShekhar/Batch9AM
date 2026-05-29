import { test, expect, request } from '@playwright/test';
import { ApiUtils } from "../pages/ApiUtils";
import { PageObjectManager } from '../pages/PageObjectManager';

const loginPayload = {
    userEmail: "gomasachandrashekhar@gmail.com",
    userPassword: "Gomasa@1988"
};

const orderPalyload = {
    orders: [
        {
            country: "India",
            productOrderedId: "6960ea76c941646b7a8b3dd5"
        }
    ]
};

const baseUrl: string = 'https://rahulshettyacademy.com';
let loginResponse = {};

// let pom: PageObjectManager;

// test.beforeAll("API Test valid credentials", async () => {
//     const apiContext = await request.newContext();
//     const apiUtils = new ApiUtils(apiContext, loginPayload);
//     response = await apiUtils.createOrder(orderPalyload);

// });

test("Test01 Login", async () => {
    const apiContext = await request.newContext();
    const loginResp = await apiContext.post(
        `${baseUrl}/api/ecom/auth/login`,
        {
            data: loginPayload
        }
    );

    expect.soft(loginResp.ok()).toBeTruthy();

    console.log("Status code is :: ", loginResp.status());
    console.log("Status message is :: ", loginResp.statusText());

    const loginRespJson = await loginResp.json();
    loginResponse.token = loginRespJson.token;
    console.log("Response token is :: ", loginResponse.token);
    // console.log("Response userId is :: ", loginRespJson.userId);
    // console.log("Response message is :: ", loginRespJson.message);

});

test("Test02 Place Order", async ({ page }) => {

    const apiContext = await request.newContext();

    const postResponse = await apiContext.post(
        `${baseUrl}/api/ecom/order/create-order`,
        {
            data: orderPalyload,
            headers: {
                'authorization': loginResponse.token,
                'Content-Type': "application/json"
            }
        });

    expect.soft(postResponse.status()).toBe(201);
    expect.soft(postResponse.statusText()).toBe('Created');

    const jsonResponse = await postResponse.json();
    loginResponse.orderId = jsonResponse.orders[0];

    console.log('Product Id :: ', jsonResponse.productOrderId[0]);
    console.log('Order Id :: ', loginResponse.orderId);
    console.log('Order Placed Message :: ', jsonResponse.message);

});

test("Test03 Navigate to orders page", async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, loginResponse.token);

    await page.goto(`${baseUrl}/client/#/dashboard/dash`);
    await page.waitForLoadState("domcontentloaded");
    await expect.soft(page.locator("//h3[text()='Automation']")).toBeVisible();

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator('table.ng-star-inserted').waitFor();
    const rows = page.locator("//tbody//tr");
    const rowsCount = await rows.count();

    for (let i = 0; i <= rowsCount; i++) {
        await rows.nth(i).focus();
        const rowOrderId = await rows.nth(i).locator("//th").innerText();
        console.log(`Row Order Id is : ${rowOrderId}`);

        if (loginResponse.orderId.includes(rowOrderId)) {
            // await rows.nth(i).locator("button").click();
            await rows.nth(i).getByText('View').click();
            break;
        }
    }
    await expect.soft(page.locator('.email-title')).toBeVisible();
    const orderIdDetails = await page.locator("div.col-text").innerText();
    await expect.soft(loginResponse.orderId).toBe(orderIdDetails);
    await expect.soft(loginResponse.orderId.includes(orderIdDetails)).toBeTruthy();
    await expect.soft(page.locator("div.col-text")).toContainText(loginResponse.orderId);

    await page.getByText("View Orders").click();
    await expect.soft(page.locator('//h1[text()="Your Orders"]')).toBeVisible();

    const signOutBtn = page.getByRole('button', { name: 'Sign Out' });
    await expect.soft(signOutBtn).toBeVisible();
    await signOutBtn.click();

    await page.close();

});




