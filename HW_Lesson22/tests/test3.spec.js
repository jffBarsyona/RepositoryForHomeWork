const { test } = require('@playwright/test');
const basePage = require('../pageobjects/basePage');

test.describe('003 - Open Website https://playwright.dev/ click the Star button and check the "playwright" title on the github page', () => {
    test('Open Website. Click the Get started button and check the "Installation" title on the GETTING STARTED page', async ({ page }) => {
        const commonPage = new basePage(page);
        await commonPage.open();
        await commonPage.clickButton('//span[@class= "gh-text" and text()="Star"]');
        await commonPage.expectElementByRole('heading', { name: 'playwright' });
    });
});