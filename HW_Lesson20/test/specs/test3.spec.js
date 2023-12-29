const homePage = require('../pageobjects/homePage');
const basePage = require('../pageobjects/basePage');

const buttonNameInHtml = "Get Started"
const buttonName = "GET STARTED";
const titleText = "GETTING STARTED";

describe('003 - Open Website https://jasmine.github.io and check GET STARTED button and check the GETTING STARTED button on the GETTING STARTED page', function () {

    it('should open the website and check GET STARTED button', async function () {
        await homePage.open();
        const buttonOnHomePage = await basePage.getButtonText(buttonNameInHtml);
        const buttOnHome = await basePage.getElementText(buttonOnHomePage);
        expect(buttOnHome).toBe(buttonName);
    });

    it('should click the GETTING STARTED button and check the GETTING STARTED title', async function () {
        await basePage.clickOnButton(buttonNameInHtml);
        const titleOnPage = await basePage.getTitleText_h1(titleText);
        const title = await basePage.getElementText(titleOnPage);
        expect(title).toBe(titleText);
    })
});