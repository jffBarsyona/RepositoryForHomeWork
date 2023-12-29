const homePage = require('../pageobjects/homePage');
const basePage = require('../pageobjects/basePage');

const titleName = "FAST";

describe('001 - Open Website https://jasmine.github.io and check the "Fast" title', function () {

  it('should open the website and check the title', async function () {
    await homePage.open();
    const titleOnHomeElement = await basePage.getTitleText_h5(titleName)
    const titleOnHome = await basePage.getElementText(titleOnHomeElement)
    expect(titleOnHome).toBe(titleName);
  });
});
