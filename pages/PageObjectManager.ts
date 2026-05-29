import { type Page } from '@playwright/test';

import { LoginPage } from "./LoginPage";
import { PlaceOrderPage } from "./PlaceOrderPage";
import { TestData } from '../testdata/TestData';

export class PageObjectManager {
    readonly page: Page;
    readonly loginPage: LoginPage;
    readonly placeOrderPage: PlaceOrderPage;
    readonly testData: TestData;


    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.placeOrderPage = new PlaceOrderPage(this.page);
        this.testData = new TestData();
    }

}


