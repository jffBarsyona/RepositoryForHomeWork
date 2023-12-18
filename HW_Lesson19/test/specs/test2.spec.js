const { describe, it, before, after } = require('mocha');
const { remote } = require('webdriverio');
const assert = require('assert');

describe('002 - Click the "Node.js" link and check the "Download Node.js®" h2 title on the opened page', function () {
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

    it('Click the "Node.js" link and check the "Download Node.js®" h2 title on the opened page', async function () {
        await browser.url('https://mochajs.org');
        const link = await browser.$('//*[@id="content"]//a[text()="Node.js"]');
        await link.click();
        const pageTitle = await browser.$('//*[@id="home-intro"]/h2').getText();
        assert.strictEqual(pageTitle, 'Download Node.js®');
    });
});
