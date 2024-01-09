const chromeConfig = require('../pageobjects/users');

class AddinPage {

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

    // Контекстное меню в дереве
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
        return $('//*[contains(@class, "adx-preview expanded")]')
    }

    async previewEditorIsOpened() {
        const editor = this.previewEditorTemplateOrFolder;
        await editor.waitForDisplayed();
    }

    // Выбор елемента в дереве по имени
    async selectElementInTree(nameElement) {
        const element = $('//*[@class="p-element adx-template-name" and text()="' + nameElement + '"]');
        await element.waitForDisplayed();
        await element.click();
        return element;
    }

    async selectItemFromContextMenuInTree(nameItem) {
        await this.openContextMenuOnElementInTree();
        const item = await $('//*[contains(@class, "p-menuitem-text") and text()="' + nameItem + '"]');
        await item.waitForDisplayed();
        await item.click();
    }

    async spinnerIsCompleted() {
        const spinner = this.spinnerOnTeam;
        await spinner.waitForDisplayed();
        await spinner.waitForExist({ timeout: 60 * 1000, reverse: true });
    }

    async openContextMenuOnElementInTree() {
        const contextMenu = this.contextMenuOnElementInTree;
        //Ожидание для второго лоадера
        await browser.pause(1500);
        await contextMenu.waitForDisplayed();
        await contextMenu.click();
    }

    async clickButtonSignInEmail() {
        const signInEmailButton = this.buttonSignInEmail;
        await signInEmailButton.waitForClickable();
        await signInEmailButton.click();
    }

    async clickButtonSignIn() {
        const signInButton = this.buttonSignIn;
        await signInButton.waitForDisplayed();
        //await signInButton.waitForClickable();
        await browser.pause(1000);
        await signInButton.click();
    }

    async enterAddinEmail() {
        const login = chromeConfig.addinUser;
        const inputUser = this.inputAddinUser;
        await inputUser.waitForDisplayed();
        await inputUser.setValue(login);
    }

    async enterAddinPassword() {
        const pass = chromeConfig.addinPassword;
        const inputPassword = this.inputAddinPassword;
        await inputPassword.waitForDisplayed();
        await inputPassword.setValue(pass);
    }

    async enterNameForTemplateOrFolder(setName) {
        const name = this.inputNameForTemplateOrFolder;
        await name.waitForDisplayed();
        await name.setValue(setName);
    }

    async clickButtonSaveOnFooterForTemplateOrFolder() {
        const saveButton = this.buttonSaveOnFooterForTemplateOrFolder;
        await saveButton.click();
    }
}

module.exports = new AddinPage();