const usersData = require('../Data/users');

class Addin {

    get buttonSignInEmail() {
        return $('//*[@class="p-button-label ng-star-inserted" and text()="Sign in with email"]');
    }

    get buttonSignIn() {
        return $('//*[@class="p-button-label ng-star-inserted" and text()="Sign in"]');
    }

    get inputAddinUser() {
        return $('input[name="username"]');
    }

    get inputAddinPassword() {
        return $('input[name="password"]');
    }

    get contextMenuOnElementInTree() {
        return $('//*[@id="button-tree-dots"]/button');
    }

    get spinnerOnTeam() {
        return $('//*[contains(@class, "team-progress-spinner")]');
    }

    get inputNameForTemplateOrFolder() {
        return $('//*[contains(@id, "input") and contains(@id, "name")]');
    };

    get buttonSaveOnFooterForTemplateOrFolder() {
        return $('//*[@id="footer-button-save"]//*[contains(@class, "p-button") and text()="Save"]');
    }

    get previewEditorTemplateOrFolder() {
        return $('//*[contains(@class, "adx-preview expanded")]');
    }

    get copyright() {
        return $('//*[@class="adx-copyright"]');
    }

    get inputFolderName() {
        return $('//*[@id="input-folder-name"]');
    }

    get inputTemplateName() {
        return $('//*[@id="input-template-name"]');
    }

    get buttonMoreOnFooter() {
        return $('//*[@id="footer-button-dots"]');
    }

    async openContextMenuOnFooter(nameItem) {
        const buttonMore = await this.buttonMoreOnFooter;
        await buttonMore.waitForDisplayed();
        await buttonMore.click();

        const item = await this.getItemFromContextMenu(nameItem);
        await item.waitForDisplayed();
        await item.click();
    }

    async getItemFromContextMenu(nameItem) {
        return $('//*[contains(@class, "p-menuitem-text") and text()="' + nameItem + '"]');
    }

    async getElementInTree(nameElement) {
        return $('//*[@class="p-element adx-template-name" and text()="' + nameElement + '"]');
    }

    async getTab(tabIndex) {
        return $('//*[@tabindex="' + tabIndex + '"]');
    }

    async goToTab(tabIndex) {
        const tab = await this.getTab(tabIndex);
        await tab.waitForDisplayed();
        await tab.click();
    }

    async previewEditorIsOpened() {
        const editor = this.previewEditorTemplateOrFolder;
        await editor.waitForDisplayed();
    }

    async spinnerIsCompleted() {
        const spinner = this.spinnerOnTeam;
        await spinner.waitForDisplayed();
        await spinner.waitForExist({ timeout: 60 * 1000, reverse: true });
    }

    async checkElementInTree(nameElement) {
        const element = await this.getElementInTree(nameElement);
        await element.waitForDisplayed();
        expect(await element.isDisplayed()).toBe(true);

    }

    async openContextMenu(nameElement, nameItem) {
        await this.spinnerIsCompleted();

        const element = await this.getElementInTree(nameElement);
        await element.waitForDisplayed();
        await element.click();

        const contextMenu = await this.contextMenuOnElementInTree;
        await browser.pause(1500);
        await contextMenu.waitForDisplayed();
        await contextMenu.click();

        const item = await this.getItemFromContextMenu(nameItem);
        await item.waitForDisplayed();
        await item.click();
    }

    async signIntoAddin() {
        const signInEmailButton = this.buttonSignInEmail;
        await signInEmailButton.waitForClickable();
        await signInEmailButton.click();

        const login = usersData.addinUser;
        const inputUser = this.inputAddinUser;
        await inputUser.waitForDisplayed();
        await inputUser.setValue(login);

        const pass = usersData.addinPassword;
        const inputPassword = this.inputAddinPassword;
        await inputPassword.waitForDisplayed();
        await inputPassword.setValue(pass);

        const signInButton = this.buttonSignIn;
        await signInButton.waitForDisplayed();
        await signInButton.waitForClickable();
        await browser.pause(1000);
        await signInButton.click();

        const element = await this.getElementInTree('My Templates');
        await element.waitForDisplayed();
        expect(await element.isDisplayed()).toBe(true);
    }

    async enterNameForTemplateOrFolder(setName) {
        const name = this.inputNameForTemplateOrFolder;
        await name.waitForDisplayed();
        await name.setValue(setName);

        const saveButton = this.buttonSaveOnFooterForTemplateOrFolder;
        await saveButton.click();
    }
}
module.exports = new Addin();