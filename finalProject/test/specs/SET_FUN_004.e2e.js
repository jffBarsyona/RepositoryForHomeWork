const outlook = require('../pageobjects/outlookLocators');
const addin = require('../pageobjects/addinLocators');
const fun = require('../pageobjects/functions');
const components = require('../Data/components');


describe('SET_FUN_003 - Create an empty template named "SET_FUN_002" via the context menu', () => {
    const item = components.itemHelp;

    beforeAll(() => {
    });

    it('Should open outlook.com and sign in to Outlook.', async () => {
        await outlook.loginToOutlook();
    });

    it('Should open a new email.', async () => {
        await outlook.openNewEmail();
    });

    it('Should open the add-in pane.', async () => {
        await outlook.openAddinPane();
    });

    it('Should sign in via the email.', async () => {
        await addin.signIntoAddin();
    });

    it('Should open the "Help" page from the context menu on the footer.', async () => {
        await addin.openContextMenuOnFooter(item);
        await fun.checkOpenedTab(fun.pageHelp);
    });
});