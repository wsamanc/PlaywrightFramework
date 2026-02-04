import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestConfig } from '../test.config';
import { DashboardPage } from '../pages/DashboardPage';
import { DataProvider } from '../utils/dataProvider';

// load JSON test data
const jsonPath = './testdata/logindata.json';
const jsonLogindata = DataProvider.getJsonData(jsonPath);

for (const data of jsonLogindata) {

    // testName comes from JSON data as key
    test(`OrangeHRM Login Test with JSON - ${data.testName} @dataDriven`, async ({ page }) => {

        test.setTimeout(50000); // Set timeout to 30 seconds
        const config = new TestConfig();
        await page.goto(config.appUrl); // 1. Navigate to the OrangeHRM login page.
        const loginPage = new LoginPage(page);
        const dashboard = new DashboardPage(page);

        // 2. Enter username and password from data
        await loginPage.enterUserName(data.username);
        await loginPage.enterPassword(data.password);
        // 3. Click the login button.
        await loginPage.clickLoginButton();
        // 4. Verify login outcome based on expected result         
        if (data.expected.toLowerCase === 'success') {
            const isDashboardExistsStatus = await dashboard.isDashboardPageExists();
            expect(isDashboardExistsStatus).toBeTruthy();

        } else if (data.expected.toLowerCase === 'failure') {
            const isLoginPageExistsStatus = await loginPage.isLoginPageExists();
            expect(isLoginPageExistsStatus).toBeTruthy();
        }

    });
}


// load CSV test data
const csvPath = './testdata/logindata.csv';
const csvLogindata = DataProvider.getCsvData(csvPath);

for (const data of csvLogindata) {

    // testName comes from CSV data as key
    test(`OrangeHRM Login Test with CSV - ${data.testName} @dataDriven`, async ({ page }) => {

        test.setTimeout(50000); // Set timeout to 30 seconds
        const config = new TestConfig();
        await page.goto(config.appUrl); // 1. Navigate to the OrangeHRM login page.
        const loginPage = new LoginPage(page);
        const dashboard = new DashboardPage(page);

        // 2. Enter username and password from data
        await loginPage.enterUserName(data.username);
        await loginPage.enterPassword(data.password);
        // 3. Click the login button.
        await loginPage.clickLoginButton();
        // 4. Verify login outcome based on expected result         
        if (data.expected.toLowerCase() === 'success') {
            const isDashboardExistsStatus = await dashboard.isDashboardPageExists();
            expect(isDashboardExistsStatus).toBeTruthy();

        } else if (data.expected.toLowerCase === 'failure') {
            const isLoginPageExistsStatus = await loginPage.isLoginPageExists();
            expect(isLoginPageExistsStatus).toBeTruthy();
        }

    });
}



