import { Page, expect, Locator } from '@playwright/test';

import { LoginPage } from './LoginPage';

export class DashboardPage {

  readonly addToCartButto: Locator;
  readonly prdoAddedToCartMessage: Locator;

  constructor(private page: Page) {
    this.addToCartButto = this.page.getByRole('button', { name: 'Add Ao Cart' });
    this.prdoAddedToCartMessage = this.page.locator('#toast-container');


  }

  async addProductToCart(productName: string) {
    let loginPage = new LoginPage(this.page);
    const products = loginPage.products;
    await expect(products.first()).toBeVisible({ timeout: 20000 });

    const count = await products.count();
    for (let i = 0; i < count; i++) {
      const name = await products.nth(i).locator('//b').innerText();
      if (name?.toLowerCase() == productName.toLowerCase()) {
        await this.addToCartButto.click();
        /*
        await this.page
          .locator('.toast-container, .toast-success, .toast-message')
          .first()
          // .waitFor({ timeout: 5000 })
          // .catch(() => { });
          */

        await expect.soft(this.prdoAddedToCartMessage).toBeVisible();
      }
      break;
    }

  }

  async goToCart() {
    await Promise.all([
      this.page.waitForSelector('h1:has-text("My Cart")'),
      this.page.locator("[routerlink*='cart']").click(),
    ]);
  }

  async logout() {
    await Promise.all([
      this.page.waitForURL('**/#/auth/login', { timeout: 10000 }),
      this.page.getByRole('button', { name: /sign out/i }).click(),
    ]);
  }
}