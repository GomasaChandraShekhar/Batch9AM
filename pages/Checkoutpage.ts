import { Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) { }

  async selectCountry(country: string) {
    const input = this.page.locator("[placeholder*='Country']");
    await expect(input).toBeVisible({ timeout: 10000 });
    await input.click();
    await input.pressSequentially(country);
    await this.page.locator('.ta-results button').first().click();
  }

  async placeOrder() {
    await Promise.all([
      this.page.waitForSelector('.hero-primary', { timeout: 15000 }),
      this.page.locator('button:has-text("Place Order"), .action__submit').click(),
    ]);
  }
}