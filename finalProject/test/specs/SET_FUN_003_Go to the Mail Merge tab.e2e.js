const outlook = require('../pageobjects/outlookLocators');
const addin = require('../pageobjects/addinLocators');
const components = require('../Data/components');


describe('SET_FUN_003 - Go to the "Mail Merge" tab', () => {
    const tab = components.tabMailMerge;

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

    it('Should go to the "Mail Merge" tab.', async () => {
       await addin.goToTab(tab);
       await addin.checkElementInTree('Mail Merge');
    });
});