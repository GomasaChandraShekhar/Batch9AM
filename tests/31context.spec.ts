import { test, chromium } from '@playwright/test';
import { PageObjectManager } from '../pages/PageObjectManager';

test("Handling Proxy", async ({ }) => {


    const browser = await chromium.launch();
    const context = await browser.newContext(
        {
            proxy: {
                server: 'http://myproxy.com:3128',
                bypass: 'localhost',
                username: 'username',
                password: 'password'
            },
            // viewport: { width: 1500, height: 690 },
            ignoreHTTPSErrors: true, // SSL - Simple Socket Layer

        }
    );
    context.addCookies(
        [
            {
                name: '_ga',
                value: 'GA1.1.1839579744.1778730043',
                domain: '.rahulshettyacademy.com',
                path: '/'
            },
            {
                name: '_gcl_au',
                value: '1.1.2117362134.1778730042.76920484.1779285944.1779285950',
                domain: '.rahulshettyacademy.com',
                path: '/'
            },
            {
                name: '_ga_NVJT9K1HZ2',
                value: 'GS2.1.s1779422689$o14$g1$t1779422943$j60$l0$h1764641021',
                domain: '.rahulshettyacademy.com',
                path: '/'
            }
        ]
    );
    // const allCoockies = await context.cookies();
    // console.log(allCoockies.length); // 
    // for (const coockie of allCoockies) {
    //     console.log(coockie.name);
    //     console.log(coockie.domain);
    //     console.log(coockie.value);
    //     console.log(coockie.path);
    // }

    const page = await context.newPage();
    const poManager = new PageObjectManager(page);

    // await poManager.loginPage.goto("https://rahulshettyacademy.com/client/#/dashboard/dash");
    // await poManager.loginPage.login("gomasachandrashekhar@gmail.com", "Gomasa@1988");

    await page.goto('https://expired.badssl.com/');
    await page.pause();

});

