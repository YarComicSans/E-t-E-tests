module.exports = {
    url: 'https://www.google.com/advanced_search',
    elements: {
        mainQueryInput : 'input[name="as_q"]',
        languageDropdown : '#lr_button',
        lastUpdateDropdown : '#as_qdr_button',
        searchButton : '.jfk-button[type="submit"]',
       },
    commands: [{ //each command should return a promise! 
        selectFilter (selector, value) {
            return this
                .click(selector)
                .click(`.goog-menuitem[value="${value}"]`)
        },

        setQuery (value) {
            return this
                .setValue('@mainQueryInput', value)
        },

        search () {
            return this
                .click('@searchButton')
        }
    }]
}