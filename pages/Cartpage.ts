import { Page, expect } from '@playwright/test';
import { PageObjects } from './PageObjects';

export class CartPage extends PageObjects {

  constructor(page: Page) {
    super(page);
  }

  async verifyProduct(productName: string) {
    await expect(this.page.getByRole('heading', { name: /my cart/i }))
      .toBeVisible();

    await expect(
      this.page.getByText(productName, { exact: true })
    ).toBeVisible();
  }

  async checkout() {
    await Promise.all([
      this.selectCountrydrp.waitFor({ timeout: 15000 }),
      this.checkoutButton.click(),
    ]);
  }
}