import { test, expect } from '@playwright/test';

test("Handling web table 001", async ({ page }) => {

    await page.goto(`https://money.rediff.com/gainers/bsc/dailygroupa?`);
    await page.waitForLoadState('domcontentloaded');
    await page.pause();

    const rows = page.locator(".dataTable").getByRole('row');
    const rowsCount = await rows.count();
    console.log('Total number of rows :: ', rowsCount);

    const table = page.locator(".dataTable");

    const theaderRow = table.locator('//thead//tr');

    // Capture first row first column data.
    // const colName = await rows.nth(1).locator('//td[1]').textContent();
    // console.log(colName);

    // Capture header row every column data
    // const columns = rows.nth(0).locator('//th');
    // const colmsCount = await columns.count();
    // for (let c = 0; c < colmsCount; c++) {
    //     console.log('Column Data is :: ', await rows.nth(0).locator(`//th`).nth(c).innerText());
    // }
    // console.log('Company Name is :: ', compName);

    const tbodyrows = table.locator('//tbody//tr');
    // capture all rows all columns data
    for (let i = 0; i < await tbodyrows.count(); i++) {
        const tcolumns = tbodyrows.nth(i).locator('//td');
        const colmsCount = await tcolumns.count();
        console.log('Columns count is :: ', colmsCount);

        for (let c = 0; c < colmsCount; c++) {
            console.log('Column Data is :: ', await tcolumns.nth(c).textContent());
        }
    }

});