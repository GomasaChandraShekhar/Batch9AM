import { type Page, expect } from '@playwright/test';
import { PageObjects } from './PageObjects'


export class LoginPage extends PageObjects {

  constructor ( page: Page ) {
    super( page );
  }

  async goto( url: string ) {
    await this.page.goto( url, {
      waitUntil: 'load',
    } );
  }

  async login( email: string, password: string ) {
      await this.userName.fill( email );
      await this.userPassword.fill( password );
      await this.loginButton.click();
      await this.page.waitForTimeout( 5000);
    await expect.soft( this.successMessage ).toBeVisible();
    await expect.soft( this.signOutButton ).toBeVisible();
  }

  async signOut() {
    await this.signOutButton.click();
    await expect.soft( this.userName ).toBeVisible();
  }




}