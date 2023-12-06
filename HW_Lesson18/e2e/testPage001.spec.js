const assert = require('assert');
const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Testing', function () {

    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.manage().window().setRect({ width: 1920, height: 1080 });
    });

    it('Should open a link: https://chromedriver.chromium.org/home and check the "ChromeDriver" title', async function () {
        await driver.get('https://chromedriver.chromium.org/home');
        const titleOnHome = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]//span')).getText();
        assert.strictEqual(titleOnHome, 'ChromeDriver');
    });

    it('Should navigate to "Chrome Extensions" page and verify the "Chrome Extensions" title', async function () {
        const extensionsLink = await driver.findElement(By.xpath('//*[@id="WDxLfe"]//a[contains(@class, "aJHbb") and @href="/extensions" and @data-level="1" and text()="Chrome Extensions"]'));
        await driver.wait(until.elementIsVisible(extensionsLink), 4000);
        await extensionsLink.click();
        const title = await driver.findElement(By.xpath('//*[@id="h.p_ID_13"]//span')).getText();
        assert.strictEqual(title, 'Chrome Extensions');
    });

    it('Verifies the highlight for the new main title', async function () {
        const highlightedTitle = await driver.findElement(By.xpath('//*[@id="WDxLfe"]//a[contains(@class, "aJHbb") and @data-level="1" and text()="Chrome Extensions"]'));
        await driver.wait(until.elementIsVisible(highlightedTitle), 4000);
        const color = await highlightedTitle.getCssValue('color');
        const expectedColor = 'rgba(255, 255, 255, 1)';
        assert.strictEqual(color, expectedColor);
    });

    it('Click on the search icon in the header to navigate to the search page', async function () {
        const clickedSearchIcon = await driver.findElement(By.xpath('//*[@id="atIdViewHeader"]//*[@class="vu8Pwe tCHXDc YSH9J"]'));
        await clickedSearchIcon.click();
    });

    it('Navigate to the search page, enter the text "driver" in the search field, and press the "Enter" key. Check text "Results from this site" on the search page', async function () {
        const enteredText = await driver.findElement(By.xpath('//*[@id="yDmH0d"]//*[@type="search"]'));
        await driver.wait(until.elementIsVisible(enteredText), 4000);
        await enteredText.sendKeys('driver');
        const actualText = await enteredText.getAttribute('value');
        const expectedText = 'driver';
        assert.equal(actualText, expectedText);
        await enteredText.sendKeys(Key.ENTER);
        const searchResultText = await driver.wait(until.elementLocated(By.xpath('//*[@id="yDmH0d"]//*[@class="DLXGJd"]//*[@class="x8xhwb"]')), 10000);
        let textResult = await searchResultText.getText();
        assert.strictEqual(textResult, ('Results from this site'))
    });

    it('Should find the first link and check if it contains the word "driver"', async function () {
        const searchResult = await driver.wait(until.elementLocated(By.css('div.gtazFe > div > div:nth-child(2)')), 10000);
        let text = await searchResult.getText();
        expect(text.includes('driver')).toBe(true);
    });

    after(async function () {
        await driver.quit();
    });

});







