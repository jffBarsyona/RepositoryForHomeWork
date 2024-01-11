const usersData = require('../Data/users');
const addin = require('../pageobjects/addinLocators');

class Outlook {

    get inputUser() {
        return $('input[name="loginfmt"]');
    }

    get inputPassword() {
        return $('input[name="passwd"]');
    }

    get buttonNext() {
        return $('#idSIButton9');
    }

    get lightbox() {
        return $('//*[@id="lightbox"]');
    }

    get newEmailBar() {
        return $('//*[@id="BottomBar"]//*[contains(@class, "ms-Button-textContainer")][1]');
    }

    get addinOnRibbon() {
        return $('//button[@type="button" and @aria-label="Shared Email Templates"]');
    }

    get addinIframe() {
        return $('//iframe[@class="AddinIframe"]');
    }

    get loginPageToOutlook() {
        return ('https://outlook.office.com/mail/');
    }

    get outlookEditor() {
        return $('//*[contains(@id, "editorParent")]');
    }

    get appName(){
        return $('//*[@class="hpyHhmSe9hmk5gopLr9a5Q==" and text()="Outlook"]');
    }

    async switchToIframe(selectIframe) {
        const iframe = await selectIframe;
        await iframe.waitForDisplayed();
        const iframeElement = await this.addinIframe;
        await browser.switchToFrame(iframeElement);
    }

    async openAddinPane() {
        const addinPane = this.addinOnRibbon;
        await addinPane.waitForDisplayed();
        await addinPane.waitForClickable();
        await addinPane.click();
        await this.switchToIframe(this.addinIframe);

        const copyright = await addin.copyright;
        await copyright.waitForDisplayed();
        expect(await copyright.isDisplayed()).toBe(true);
    }

    async loginToOutlook() {
        await browser.url(this.loginPageToOutlook);
        const login = usersData.user;
        const inputUser = this.inputUser;
        await inputUser.waitForDisplayed();
        await inputUser.setValue(login);
        await this.clickNextButton();

        const pass = usersData.password;
        const inputPassword = this.inputPassword;
        await inputPassword.waitForDisplayed();
        await inputPassword.setValue(pass);
        await this.clickNextButton();

        const lightboxLocator = this.lightbox;
        const isLightboxPresent = await lightboxLocator.isExisting();
        if (isLightboxPresent) {
            await this.clickNextButton();
        }
        const elementLocator = await this.appName;
        const actualText = await elementLocator.getText()
        expect(actualText).toBe('Outlook')
    }

    async clickNextButton() {
        const nextButton = this.buttonNext;
        await nextButton.waitForClickable();
        await nextButton.click();
    }

    async openNewEmail() {
        const element = await this.newEmailBar;
        await element.waitForDisplayed();
        await element.click();

        const editor = await this.outlookEditor;
        await editor.waitForDisplayed();
        expect(await editor.isDisplayed()).toBe(true);
    }
}
module.exports = new Outlook();