import { test, chromium, firefox, webkit } from '@playwright/test';

test("Launch Chrome Browser", async () => {

    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://demo.automationtesting.in/Index.html");

});

test("Launch Firefox Browser", async () => {

    const browser = await firefox.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.selenium.dev/");

});

test("Launch Safari Browser", async () => {

    const browser = await webkit.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.selenium.dev/");

});
