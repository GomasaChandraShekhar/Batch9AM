import { test, expect, request } from '@playwright/test';
import { ApiUtils } from "../pages/ApiUtils";
import { PageObjectManager } from '../pages/PageObjectManager';

const loginPayload = { userEmail: "gomasachandrashekhar@gmail.com", userPassword: "Gomasa@1988" };
const orderPalyload = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
const url: string = 'https://rahulshettyacademy.com/client';
let token: string;
let orderId: string;
let response = {};
let pom: PageObjectManager;
// const productName: string = 'ZARA COAT 3';

// 6960ea76c941646b7a8b3dd5 - Iphone
// 6960eac0c941646b7a8b3e68 
// 6960eac0c941646b7a8b3e68- Zara Cote 3

test.beforeAll("API Test valid credentials", async () => {
    const apiContext = await request.newContext();
    const apiUtils = new ApiUtils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPalyload);

});


test.skip("Login", async () => {

    const apiContext = await request.newContext();

    const loginResp = await apiContext.post(
        "https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayload
        }
    );

    expect.soft(loginResp.ok()).toBeTruthy();

    console.log("Status code is :: ", loginResp.status());
    console.log("Status message is :: ", loginResp.statusText());

    const loginRespJson = await loginResp.json();

    console.log("Response token is :: ", loginRespJson.token);
    // console.log("Response userId is :: ", loginRespJson.userId);
    // console.log("Response message is :: ", loginRespJson.message);
    token = loginRespJson.token;

});

test.skip("Place Order 01", async ({ page }) => {

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, token);

    // await page.goto("https://rahulshettyacademy.com/client");
    // await page.waitForLoadState("domcontentloaded");

    const apiContext = await request.newContext();

    const response = await apiContext.post('https://rahulshettyacademy.com/api/ecom/order/create-order',
        {
            data: {
                orderPalyload,
            },
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }

        });

    expect.soft(response.status()).toBe(201);
    expect.soft(response.statusText()).toBe('Created');

    const jsonResponse = await response.json();
    orderId = jsonResponse.orders[0];

    console.log('Product Id :: ', jsonResponse.productOrderId[0]);
    console.log('Order Id :: ', orderId);
    console.log('Order Placed Message :: ', jsonResponse.message);

    // await page.pause();

});


test("Verify Order 02", { tag: '@Sanity' }, async ({ page }) => {
    pom = new PageObjectManager(page);
    await page.addInitScript(value => { window.localStorage.setItem('token', value); },
        response.token);
    await pom.loginPage.goto(url);
    // const orderId = await pom.placeOrderPage.getOrderId();
    // await pom.placeOrderPage.navigateToOrdersPage();
    await pom.placeOrderPage.verifyOrder(response.orderId);
    await pom.placeOrderPage.clickOrderHistoryLink();
    await pom.placeOrderPage.verifyOrder(orderId);
    await pom.placeOrderPage.clickViewOrdersButton();

});

test("Place Order 03", { tag: '@Smoke' }, async ({ page }) => {

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


test.afterAll("Logout Test", async () => {
    await pom.loginPage.signOut();
});