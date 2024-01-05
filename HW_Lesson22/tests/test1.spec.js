const { test } = require('@playwright/test');
const basePage = require('../pageobjects/basePage');

test.describe('001 - Open Website https://playwright.dev/ and check the "Playwright" title', () => {
    test('should open the website and check the "Playwright" title', async ({ page }) => {
        const commonPage = new basePage(page);
        await commonPage.open();
        await commonPage.checkTitle(/Playwright/);
    });
});



