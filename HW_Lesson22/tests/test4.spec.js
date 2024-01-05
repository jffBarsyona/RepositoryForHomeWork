const { test } = require('@playwright/test');
const basePage = require('../pageobjects/basePage');

test.describe('004 - Open Website https://playwright.dev/ click the Codegen link and check the "Test generator" title on the codegen page', () => {
    test('Open Website. lick the Codegen link and check the "Test generator" title on the codegen page', async ({ page }) => {
        const commonPage = new basePage(page);
        await commonPage.open();
        await commonPage.clickButton('//a[text()="Codegen."]');
        await commonPage.expectElementByRole('heading', { name: 'Test generator' });
    });
});