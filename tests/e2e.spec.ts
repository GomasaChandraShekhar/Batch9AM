import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/Loginpage';
import { DashboardPage } from '../pages/Dashboardpage';
import { CartPage } from '../pages/Cartpage';
import { CheckoutPage } from '../pages/Checkoutpage';

test('E2E Purchase Flow', async ({ page }) => {

  const login = new LoginPage(page);
  const dashboard = new DashboardPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  const productName = "iphone 13 pro";

  await login.goto();
  await login.login("gomasachandrashekhar@gmail.com", "Gomasa@1988");

  await dashboard.addProductToCart(productName);
  await dashboard.goToCart();

  await cart.verifyProduct(productName);
  await cart.checkout();

  await checkout.selectCountry("ind");
  await checkout.placeOrder();

  await expect(page.locator(".hero-primary")).toHaveText(/Thankyou/i);

  // Logout after purchase
  await dashboard.logout();
});