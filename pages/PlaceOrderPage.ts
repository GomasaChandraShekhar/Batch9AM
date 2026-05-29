import { expect, type Page } from "@playwright/test";
import { PageObjects } from './PageObjects'

export class PlaceOrderPage extends PageObjects {

    constructor(page: Page) {
        super(page);
    }

    async addProdToCart(prodName: string) {
        await expect.soft(this.prodCards.first()).toBeVisible();

        await expect.soft(this.prodCards.first()).toBeVisible();
        for (const prod of await this.prodCards.all()) {
            const prodNameAppln = await prod.locator("b").innerText();
            if (prodNameAppln == prodName) {
                await prod.locator("//button[text()=' Add To Cart']").click();
                break;
            }
        }

        // const products = this.prodCards;
        // const productsCount = await products.count();
        // for (let i = 0; i < productsCount; i++) {
        //     if (await products.nth(i).locator("//b").innerText() == ProdName) {
        //         await products.nth(i).locator("//button[text()=' Add To Cart']").click();
        //         break;
        //     }
        // }

        await expect.soft(this.successMessage).toBeVisible();
    }

    async navigateToCart() {
        await this.cartButton.first().click();
        await expect.soft(this.checkoutButton).toBeVisible();
    }

    async placeOrder(country: string) {
        await this.checkoutButton.click();
        await this.selectCountrydrp.click();
        await this.selectCountrydrp.pressSequentially(country);
        await expect.soft(this.countryOption.last()).toBeVisible();
        await this.countryOption.last().click();
        await this.placeOrderButton.click();
    }


    async getOrderId(): Promise<string> {
        await expect.soft(this.orderIdText).toBeVisible();
        return (await this.orderIdText.innerText()).replaceAll('|', '').trim();
    }

    async clickOrderHistoryLink() {
        await this.ordersHistoryButton.click();
        await expect.soft(this.ordersTable).toBeVisible();
    }

    async verifyOrder(orderId: string) {
        await expect.soft(this.orderIdCol).toContainText(orderId);
        if (await this.orderIdCol.innerText() == orderId) {
            await this.viewOrderButon.click();
        }
        await expect.soft(this.orderIdInOrderDetails).toContainText(orderId);
    }

    async clickViewOrdersButton() {
        await this.viewOrdersButton.click();
        await expect.soft(this.ordersTable).toBeVisible();
    }


}

