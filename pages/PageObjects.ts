import { type Page, type Locator } from "@playwright/test";

export class PageObjects {

    readonly page: Page;
    readonly userName: Locator;
    readonly userPassword: Locator;
    readonly loginButton: Locator;
    readonly signOutButton: Locator;
    readonly products: Locator;
    readonly prodCards: Locator;
    readonly addToCart: Locator;
    readonly cartButton: Locator;
    readonly ordersButton: Locator;
    readonly checkoutButton: Locator;
    readonly selectCountrydrp: Locator;
    readonly countryOption: Locator;
    readonly placeOrderButton: Locator;
    readonly orderIdText: Locator;
    readonly orderPlacedText: Locator;
    readonly orderIdInOrderDetails: Locator;
    readonly viewOrdersButton: Locator;
    readonly ordersHistoryButton: Locator;
    readonly ordersTable: Locator;
    readonly rows: Locator;
    readonly orderIdCol: Locator;
    readonly viewOrderButon: Locator;
    readonly successMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = this.page.locator('#userEmail');
        this.userPassword = this.page.locator('#userPassword');
        this.loginButton = this.page.locator('#login');
        this.signOutButton = this.page.getByRole('button', { name: 'Sign Out', exact: true });
        this.products = this.page.locator('div.card-body');
        this.prodCards = this.page.locator('div.card-body');
        this.addToCart = this.page.locator(`button[routerlink*='cart']`);
        this.cartButton = this.page.getByRole('button', { name: ' Cart' });
        this.ordersButton = this.page.getByRole('button', { name: ' ORDERS' });
        this.checkoutButton = this.page.getByRole('button', { name: 'Checkout❯' });
        this.selectCountrydrp = this.page.getByRole('textbox', { name: 'Select Country' });
        this.countryOption = this.page.locator('button.ng-star-inserted');
        this.placeOrderButton = this.page.getByText('Place Order');
        this.orderIdText = this.page.locator(`//label[@class="ng-star-inserted"]`);
        this.orderPlacedText = this.page.getByLabel('Order Placed Successfully');
        this.orderIdInOrderDetails = this.page.locator('div.col-text.-main');
        // this.orderIdInOrderDetails = this.page.locator('app-order-details');
        this.viewOrdersButton = this.page.getByText('View Orders');
        this.ordersHistoryButton = this.page.getByText('Orders History Page');
        // this.ordersButton = page.locator("button[routerlink*='myorders']");
        this.ordersTable = this.page.locator(`//table[@class='table table-bordered table-hover ng-star-inserted']`);
        this.rows = this.ordersTable.locator('//tbody//tr');
        this.orderIdCol = this.rows.first().locator('//th');
        this.viewOrderButon = this.page.getByRole('button', { name: 'View' }).first();
        this.successMessage = this.page.locator('div#toast-container');


    }





}

