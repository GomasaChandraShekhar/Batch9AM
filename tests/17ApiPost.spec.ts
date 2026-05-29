import { test, expect, request } from '@playwright/test';

test("POST one Object", async ({ request }) => {

    const response = await request.post('https://api.restful-api.dev/objects',
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "name": "Playwright Pro 21",
                "data": {
                    "year": 2021,
                    "price": 1821.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "1 TB"
                }
            }
        });

    console.log('Status code :: ', response.status());
    console.log('Status message :: ', response.statusText());

    const jsonResponse = await response.json();

    console.log('Id :; ', jsonResponse.id);
    console.log('Name :; ', jsonResponse.name);
    console.log('createdAt :; ', jsonResponse.createdAt);
    console.log('Year :; ', jsonResponse.data.year);
    console.log('Price :: ', jsonResponse.data.price);

    let cpuModel = 'CPU model';
    let hardDiskSize = 'Hard disk size';

    console.log('CPU model :; ', jsonResponse.data[cpuModel]);
    console.log('Hard disk size', jsonResponse.data[hardDiskSize]);

});

