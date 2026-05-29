import { test, expect, request } from '@playwright/test';

test("PUT one Object", async ({ request }) => {

    const response = await request.put('https://api.restful-api.dev/objects/ff8081819d82fab6019df11615777bf6',
        {
            headers: { "Content-Type": "application/json" },
            data: {
                "name": "MacBook Pro 2026",
                "data": {
                    "year": 2026,
                    "price": 1299.99,
                    "CPU model": "Intel Core i8",
                    "Hard disk size": "4 TB",
                    "color": "Black"
                },
            }
        });

    console.log(response.status()); // 200
    console.log(response.statusText()); // OK

    const responseJson = await response.json();
    console.log(responseJson);

    console.log(responseJson.id);
    console.log(responseJson.name);
    console.log(responseJson.updatedAt);
    console.log(responseJson.data.year);
    console.log(responseJson.data.price);

    let cpuModel = "CPU model";
    let hardDiskSize = 'Hard disk size';

    console.log(responseJson.data[cpuModel]);
    console.log(responseJson.data[hardDiskSize]);

});

