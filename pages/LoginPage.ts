import { type Page, expect } from '@playwright/test';
import { PageObjects } from './PageObjects'


export class LoginPage extends PageObjects {

  constructor(page: Page) {
    super(page);
  }

  async goto(url: string) {
    await this.page.goto(url, {
      waitUntil: 'load',
    });
  }

  async login(email: string, password: string) {
    try {
      await this.userName.fill( email );
      await this.userPassword.fill( password );
      await this.loginButton.click();
      await expect.soft( this.signOutButton ).toBeVisible();
      await expect.soft( this.products.first() ).toBeVisible();
    } catch ( error ) {
      console.log(error);
    }
  }

  async signOut() {
    await this.signOutButton.click();
    await expect.soft(this.userName).toBeVisible();
  }




}