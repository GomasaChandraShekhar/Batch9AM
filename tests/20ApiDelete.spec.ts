import { test, expect, request } from '@playwright/test';


test("Delete One Object", async ({ request }) => {

    const response = await request.delete('https://api.restful-api.dev/objects/ff8081819d82fab6019df12b95167c09');
    const responseJson = await response.json();
    console.log(responseJson);

    const msg = responseJson.message;
    console.log(msg);
    expect.soft(msg).toBe('Object with id = ff8081819d82fab6019df12b95167c09 has been deleted.');

    console.log(response.status()); //  200
    console.log(response.statusText()); //  OK

    expect.soft(response.status()).toBe(200);
    expect.soft(response.statusText()).toBe('OK');

});



