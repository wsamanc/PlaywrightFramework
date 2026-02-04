import { Page, expect, Locator } from '@playwright/test';

export class DashboardPage {
    readonly page: Page;

    // locators 
    readonly dashboardTitler: Locator;
    readonly imageProfile: Locator;
    readonly btnLogout: Locator;

    // constructor
    constructor(page: Page) {
        this.page = page;
        // initialize locators
        this.dashboardTitler = page.locator('h6:has-text("Dashboard")');
        this.imageProfile = page.locator('span.oxd-userdropdown-tab');
        this.btnLogout = page.locator(':text("Logout")');
    }

    // action methods
    async isDashboardPageExists(): Promise<boolean> {
        let pageTitle = await this.dashboardTitler.textContent();
        console.log("Dashboard Title: ", pageTitle);
        if (pageTitle?.trim() === "Dashboard") {
            return true;
        } else {
            return false;
        }
    }

    async isDashboardHeaderVisible(): Promise<boolean> {
        try {
            return await this.dashboardTitler.isVisible();
        } catch (error) {
            console.error("Error during checking dashboard header visibility: ", error);
            throw error;
        }
    }

    async clickProfileImage(): Promise<void> {
        try {
            await this.imageProfile.click();
        } catch (error) {
            console.error("Error during clicking profile image: ", error);
            throw error;
        }   
    }

    async clickLogoutButton(): Promise<void> {
        try {
            await this.btnLogout.click();
        } catch (error) {
            console.error("Error during clicking logout button: ", error);
            throw error;
        }       
    }

}
