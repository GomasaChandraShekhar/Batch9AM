import { test, expect, request } from '@playwright/test';
import { ApiUtils } from '../pages/ApiUtils';

const loginPayload = { userEmail: "gomasachandrashekhar@gmail.com", userPassword: "Gomasa@1988" };
const orderPalyload = { orders: [{ country: "India", productOrderedId: "6960ea76c941646b7a8b3dd5" }] };
let response = {};

test.beforeAll("API Test valid credentials", async () => {

    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPalyload);

});


test("Place Order", { tag: "@Sanity" }, async ({ page }) => {

    await page.addInitScript(value => { window.localStorage.setItem('token', value); },
        response.token);

    await page.goto('https://rahulshettyacademy.com/client');
    await page.waitForLoadState('domcontentloaded');
    await expect(page.locator("//h3[text()='Automation']")).toBeVisible();

    // await page.pause();

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator('//tbody').waitFor();
    const rows = page.locator("//tbody//tr");

    for (let i = 0; i <= await rows.count(); i++) {
        await rows.nth(i).focus();
        const rowOrderId = await rows.nth(i).locator("//th").textContent();
        console.log(`Row Order Id is : ${rowOrderId}`);

        if (response.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }

    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

    await page.getByText("View Orders").click();

    const signOutBtn = page.getByRole('button', { name: 'Sign Out' });
    await expect(signOutBtn).toBeVisible();
    await signOutBtn.click();

    await page.close();

});

test.skip("API Test Invalid Credentials", async () => {
    const credentials = { userEmail: "gomasachandrashekhar@gmail.com", userPassword: "Gomasa@19881212" };
    const aipContext = await request.newContext();

    const loginResp = await aipContext.post(
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        { data: credentials }
    );

    expect(loginResp.ok()).toBeFalsy();

    console.log("Status code is :: ", loginResp.status());
    console.log("Status message is :: ", loginResp.statusText());

    const loginRespJson = await loginResp.json();

    // console.log("Response token is :: ", loginRespJson.token);
    // console.log("Response userId is :: ", loginRespJson.userId);
    console.log("Response message is :: ", loginRespJson.message);
});

test.skip("Login Test", async ({ page }) => {

    // await page.addInitScript(value => {
    //     window.localStorage.setItem('token', value);
    // }, token);

    const email = "";
    const ProdName = "Zara Coat 4";

    await page.goto("https://rahulshettyacademy.com/client");

    await page.locator("#userEmail").fill("gomasachandrashekhar@gmail.com");
    await page.locator("#userPassword").fill("Gomasa@1988");
    await page.locator("#login").click();

    await page.waitForLoadState("domcontentloaded");
    await expect.soft(page.locator('.card-body').first()).toBeVisible();

    const products = page.locator('.card-body');
    const titles = await page.locator('.card-body').allTextContents();
    console.log(titles);
    const count = products.count();

    // await page.pause();

});


