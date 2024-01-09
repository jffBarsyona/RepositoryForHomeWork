const addinPage = require('../pageobjects/addin.page');
const appPage = require('../pageobjects/baseobjects');

describe('SET_FUN_001 Создание пустой папки (ContextMenu)', () => {

    const nameTeam = 'My Templates';
    const nameItem = 'New Folder';
    const nameFolder = "SET_FUN_001";

    beforeAll(() => {
    });

    it('Should open outlook.com and sign in to Outlook.', async () => {
        expect(await appPage.signInToOutlook()).toBe(true);
    });

    it('Should open a new email.', async () => {
        expect(await appPage.openNewEmail()).toBe(true);
    });

    it('Should open the add-in pane.', async () => {
        expect(await appPage.openAddin()).toBe(true);
    });

    it('Should sign in via the email.', async () => {
        expect(await appPage.signInToAddinPane()).toBe(true);
    });

    it('Should create a new folder via the context menu in My Templates.', async () => {
        expect(await appPage.selectItemFromContextMenuInTree(nameTeam, nameItem)).toBe(true);
    });

    it('Should set the name "SET_FUN_001" for the folder and save it.', async () => {
        expect(await appPage.saveTemplateOrFolderViaFooterButton(nameFolder)).toBe(true);
    });

    it('Should check the created folder contains the "SET_FUN_001" name.', async () => {
        expect(await appPage.checkCreatedTemplateOrFolderByName(nameFolder)).toBe(true);
    });
});