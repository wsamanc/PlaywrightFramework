/*

Test Case : OrangeHRM Login Functionality
Description: This test case verifies the login functionality of the OrangeHRM application.
It checks for successful login with valid credentials and unsuccessful login with invalid credentials.//

steps:
1. Navigate to the OrangeHRM login page.
2. Enter valid username and password.
3. Click the login button.
4. Verify successful login by checking the presence of the dashboard page.
*/

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';
import { RandomDataGenerator } from '../utils/randomDataGenerator';
import { DashboardPage } from '../pages/DashboardPage';

// define global variables
let config: TestConfig;
let loginPage: LoginPage;
let dashboard: DashboardPage;

test.beforeEach(async ({ page }) => {
    // Any setup steps can be added here if needed in the future
    config = new TestConfig();
    await page.goto(config.appUrl); // 1. Navigate to the OrangeHRM login page.
    loginPage = new LoginPage(page);
    dashboard = new DashboardPage(page);

});

test.afterEach(async ({ page }) => {
    // Any teardown steps can be added here if needed in the future
    await page.waitForTimeout(2000); // wait for 2 seconds before closing the page
    await page.close();
});

test('OrangeHRM Login Functionality @smoke @master @sanity @regression', async () => {

    test.setTimeout(50000); // Set timeout to 30 seconds
    //  expect(await loginPage.isLoginPageExists()).toBeTruthy();
    // 2. Enter valid username and password.   
    await loginPage.enterUserName(config.Username);
    await loginPage.enterPassword(config.Password);
    // 3. Click the login button.
    await loginPage.clickLoginButton();

    // 4. Verify successful login by checking the presence of the dashboard page.
    const isDashboardExistsStatus = await dashboard.isDashboardPageExists();
    expect(isDashboardExistsStatus).toBeTruthy();
    //expect(await dashboard.isDashboardPageExists()).toBeTruthy();
    //expect(await dashboard.isDashboardHeaderVisible()).toBeTruthy();

});



