const homePage = require('../pageobjects/homePage');
const basePage = require('../pageobjects/basePage');

const tabNameInHtml = "Docs"
const tabName = "DOCS";
const titleText = "API Reference";

describe('002 - Open Website https://jasmine.github.io and check DOCS tab and check the API Reference title on the DOCS page', function () {

  it('should open the website and check the DOCS tab', async function () {
    await homePage.open();
    const tabOnHomePage = await basePage.getTabText(tabNameInHtml);
    const tabOnHome = await basePage.getElementText(tabOnHomePage);
    expect(tabOnHome).toBe(tabName);
  });

  it('should click the DOCS tab and check the API Reference title', async function () {
    await basePage.clickOnTab(tabNameInHtml);
    const titlePage = await basePage.getTitleText_h2(titleText);
    const title = await basePage.getElementText(titlePage);
    expect(title).toBe(titleText);
  });
});