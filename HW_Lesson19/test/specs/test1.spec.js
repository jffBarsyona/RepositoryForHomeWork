const { describe, it, before, after } = require('mocha');
const { remote } = require('webdriverio');
const assert = require('assert');

describe('001 - Open Website https://mochajs.org and check the "simple, flexible, fun" text', function () {
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

  it('should open the website and check the title', async function () {
    await browser.url('https://mochajs.org');

    const titleOnHomeElement = await browser.$('//*[@id="tag"]');
    const titleOnHome = await titleOnHomeElement.getText();
    assert.strictEqual(titleOnHome, 'simple, flexible, fun');
  });
});
