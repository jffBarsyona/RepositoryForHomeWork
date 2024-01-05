const { test } = require('@playwright/test');
const basePage = require('../pageobjects/basePage');

test.describe('002 - Open Website https://playwright.dev/ click the Get started button and check the "Installation" title on the GETTING STARTED page', () => {
    test('Open Website. Click the Get started button and check the "Installation" title on the GETTING STARTED page', async ({ page }) => {
        const commonPage = new basePage(page);
        await commonPage.open();
        await commonPage.clickButton('//a[@class= "getStarted_Sjon" and text()="Get started"]');
        await commonPage.checkTitle(/Installation/);
    });
});