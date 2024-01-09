const outlookPage = require('./outlook.page');
const addinPage = require('./addin.page');

class AppPage {

    //isBreak = false;

    // Текст ошибки
    handleErrorAndReturnFalse(error, message) {
        console.error(`Произошла ошибка: ${message}`, error);
        return false;
    }

    //  Открытие Outlook
    async signInToOutlook() {
        try {
            await browser.url(outlookPage.loginPageToOutlook);
            await this.loginToOutlook();

        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Вход в Outlook');
        }
        return true;
    }

    // Логин в Outlook
    async loginToOutlook() {
        await outlookPage.enterEmailLogin();
        await outlookPage.clickNextButton();
        await outlookPage.enterEpassword();
        await outlookPage.clickNextButton();

        const lightboxLocator = outlookPage.lightbox;
        const isLightboxPresent = await lightboxLocator.isExisting();

        if (isLightboxPresent) {
            await outlookPage.clickNextButton();
        }
    }

    // Открытие нового сообщения
    async openNewEmail() {
        try {
            const element = await outlookPage.newEmailBar;
            await element.waitForDisplayed();
            await element.click();

        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Открытие нового email');
        }
        return true;
    }

    // Открыть панель аддина
    async openAddin() {
        try {
            await outlookPage.openAddinPane();

        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Открытие адд-ина');
        }
        return true;
    }

    // Логин в панель аддина через Email
    async signInToAddinPane() {
        try {
            await outlookPage.switchToIframe();
            await addinPage.clickButtonSignInEmail();
            await addinPage.enterAddinEmail();
            await addinPage.enterAddinPassword();
            await addinPage.clickButtonSignIn();

        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Вход в адд-ин');
        }
        return true;
    }

    // На элементе, выбор пункта из контекстного меню в дереве
    async selectItemFromContextMenuInTree(nameElement, nameItem) {
        try {
            await addinPage.spinnerIsCompleted();
            await addinPage.selectElementInTree(nameElement);
            await addinPage.selectItemFromContextMenuInTree(nameItem);
        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Открытие контекстного меню на элементе');
        }
        return true;
    }

    // Сохранение темплейта или папки с новым именем
    async saveTemplateOrFolderViaFooterButton(setName) {
        try {
            await addinPage.previewEditorIsOpened();
            await addinPage.enterNameForTemplateOrFolder(setName);
            await addinPage.clickButtonSaveOnFooterForTemplateOrFolder();
        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Сохранение темплейта или папки с новым именем');
        }
        return true;
    }

    //Проверка созданного темплейта или папки по имени
    async checkCreatedTemplateOrFolderByName(createdElement) {
        try {
            const element = await addinPage.selectElementInTree(createdElement);
            const textElement = await element.getText();
            expect(textElement).toBe(createdElement);
        } catch (error) {
            return this.handleErrorAndReturnFalse(error, 'Поиск созданного темплейта или папки по имени в дереве');
        }
        return true;
    }
}

module.exports = new AppPage();