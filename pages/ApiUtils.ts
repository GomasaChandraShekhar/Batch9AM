import { APIRequestContext } from '@playwright/test';

export class ApiUtils {

    readonly apiContext: APIRequestContext;
    readonly loginPayload;
    readonly response = {};

    constructor(apiContext: APIRequestContext, loginPayload: {}) {
        this.apiContext = apiContext;
        this.loginPayload = loginPayload;
    }

    async getToken() {

        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            { data: this.loginPayload }
        );

        // console.log("Status code is :: ", loginResponse.status()); // 200
        // console.log("Status message is :: ", loginResponse.statusText()); // OK

        const loginRespJson = await loginResponse.json();
        const token = loginRespJson.token;
        // console.log("Response token is :: ", token);
        // console.log("Response userId is :: ", loginRespJson.userId);
        // console.log("Response message is :: ", loginRespJson.message);

        return token;
    }

    async createOrder(orderPalyload: {}) {
        //let response: { token: string; orderId: string; } = { token: '', orderId: '' };
        this.response.token = await this.getToken();

        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPalyload,
                headers: {
                    'authorization': this.response.token,
                    'content-type': "application/json"
                }
            }
        );

        // console.log("Status code is :: ", orderResponse.status()); // 201
        // console.log("Status message is :: ", orderResponse.statusText()); // Created

        const orderResponseJson = await orderResponse.json();
        const orderId = orderResponseJson.orders[0];
        // console.log(`Response message is :: ${orderResponseJson.message}`);
        console.log(`Order id is :: ${orderId}`);
        console.log(`Product id is :: ${orderResponseJson.productOrderId[0]}`);
        this.response.orderId = orderId;
        return this.response;
    }

}

