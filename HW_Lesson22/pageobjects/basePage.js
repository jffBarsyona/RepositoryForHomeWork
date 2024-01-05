const { expect } = require('@playwright/test');

class basePage {
    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('https://playwright.dev/');
    }

    async checkTitle(textTitle) {
        await expect(this.page).toHaveTitle(textTitle);
    }

    async clickButton(selector) {
        await this.page.click(selector);
    }

    async expectElementByRole(role, options) {
        await expect(this.page.getByRole(role, options)).toBeVisible();
    }
}
module.exports = basePage;