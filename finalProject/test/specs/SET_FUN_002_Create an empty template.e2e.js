const outlook = require('../pageobjects/outlookLocators');
const addin = require('../pageobjects/addinLocators');
const components = require('../Data/components');


describe('SET_FUN_002 - Create an empty template named "SET_FUN_002" via the context menu', () => {
    const nameTeam = components.defaultTeam;
    const nameItem = components.itemNewTemplate;
    const nameTemplate = 'SET_FUN_002';

    beforeAll(() => {
    });

    it('Should open outlook.com and sign in to Outlook.', async () => {
        await outlook.loginToOutlook();
    });

    it('Should open a new email.', async () => {
        await outlook.openNewEmail();
    });

    it('Should open the add-in pane.', async () => {
        await outlook.openAddinPane()
    });

    it('Should sign in via the email.', async () => {
        await addin.signIntoAddin();
    });

    it('Should create a new template via the context menu in My Templates.', async () => {
        await addin.openContextMenu(nameTeam, nameItem);
        const element = await addin.inputTemplateName;
        await element.waitForDisplayed();
        expect(await element.isDisplayed()).toBe(true);

    });

    it('Should set the name "SET_FUN_001" for the template and save it', async () => {
        await addin.enterNameForTemplateOrFolder(nameTemplate);
        await addin.checkElementInTree(nameTemplate);
    });
});