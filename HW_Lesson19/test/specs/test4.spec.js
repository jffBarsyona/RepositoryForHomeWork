const { describe, it, before, after } = require('mocha');
const { remote } = require('webdriverio');
const assert = require('assert');

describe('004 - Click the "backer" link and check the "mocha" text on the opened page', function () {
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

  it('Click the "backer" link and check the "mocha" text on the opened page', async function () {
    await browser.url('https://mochajs.org');
    const link = await browser.$('//*[@id="content"]//a[text()="backer"]');
    await link.click();
    const pageTitle = await browser.$('//*[@id="__next"]//main//h1[text()="Mocha"]').getText();
    assert.strictEqual(pageTitle, 'Mocha');

  });
});
