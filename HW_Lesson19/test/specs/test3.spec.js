const { describe, it, before, after } = require('mocha');
const { remote } = require('webdriverio');
const assert = require('assert');

describe('003 - Click the "GitHub" link and check the "mocha®" text on the opened page', function () {
    let browser;

    before(async function () {
        browser = await remote({
            capabilities: {
                browserName: 'chrome',
            },
        });
    });

    after(async function () {
        await browser.deleteSession();
    });

    it('Click the "GitHub" link and check the "mocha®" text on the opened page', async function () {
        await browser.url('https://mochajs.org');
        const link = await browser.$('//*[@id="content"]//a[text()="GitHub"]');
        await link.click();
        const pageTitle = await browser.$('//*[@id="repository-container-header"]//strong/a[text()="mocha"]').getText();
        assert.strictEqual(pageTitle, 'mocha');
    });
});
