import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', {
      open: 'never',
      outputFolder: `playwright-report-${new Date().toLocaleString()
        .replaceAll(' ', '').replaceAll(/[/:,]/g, '-')}`
    }],
    ['allure-playwright']
  ],

  // [
  //   ['html', {
  //     open: 'never',
  //     outputFolder: `playwright-report-${new Date().toLocaleString()
  //       .replaceAll(' ', '').replaceAll(/[/:,]/g, '-')}`
  //   }],
  //   ['allure-playwright']
  // ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  timeout: 50 * 1000, // milli seconds
  expect: {
    timeout: 10 * 1000, // milli seconds
  },
  // retries: 2,
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    headless: false,
    // proxy: {
    //   server: 'http://myproxy.com:3128',
    //   bypass: 'localhost',
    // },

  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1500, height: 690 },
      },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'],
    // viewport: { width: 1500, height: 690 },
    //  },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
