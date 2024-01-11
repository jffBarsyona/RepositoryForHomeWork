class Fun {

    get pageHelp() {
        return ('https://www.ablebits.com/docs/outlook-shared-templates-intro/?client=oladdin&src=ellipsishelp')
    }

    async checkOpenedTab(page) {
        let condition = true;
        let condition2 = 1;
        // Ожидание, пока значение не будет равно 2 в течении времени 
        while (condition && condition2 < 10) {
            if (await browser.getWindowHandles().length === 2) {
                condition = false;
            }
            await browser.pause(1000);
            condition2++;
        }
        //массив из кол-ва открытых страниц
        const currentTabs = await browser.getWindowHandles();
        //переключает на последний элемент в массие, т.е. на вторую страницу
        await browser.switchToWindow(currentTabs[currentTabs.length - 1]);
        const result = await browser.getUrl();
        expect(result).toBe(page);
    }
}

module.exports = new Fun();