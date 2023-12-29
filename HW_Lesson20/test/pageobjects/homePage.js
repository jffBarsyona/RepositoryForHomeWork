class HomePage {
    async open() {
        await browser.url('https://jasmine.github.io/');
    }
}

module.exports = new HomePage()