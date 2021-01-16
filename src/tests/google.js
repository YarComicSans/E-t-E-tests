module.exports = {
    '@tags': ['google'],

    'Google advanced search: Harry Potter': (browser) => {
        const mainQueryInputSelector = 'input[name="as_q"]'
        const mainQuery = 'Harry Potter'

        const languageDropdownOpenerSelector = '#lr_button'
        const languageDropdownValueSelector = '.goog-menuitem[value="lang_en"]'

        const lastUpdateDropdownOpenerSelector = '#as_qdr_button'
        const lastUpdateDropdownValueSelector = '.goog-menuitem[value="m"]'

        const submitButtonSelector = '.jfk-button[type="submit"]'

        const resultsPageQuerySelector = `#searchform input[name="q"][value="${mainQuery}"]`

        browser
            .url('https://www.google.com/advanced_search')
            .setValue(mainQueryInputSelector, mainQuery)
            .click(languageDropdownOpenerSelector)
            .click(languageDropdownValueSelector)
            .click(lastUpdateDropdownOpenerSelector)
            .click(lastUpdateDropdownValueSelector)
            .click(submitButtonSelector)
            .saveScreenshot('tests_output/google.png')
            .assert.urlContains('as_q=Harry+Potter', 'Params: Query is Harry Potter')
            .assert.urlContains('lr=lang_en', 'Params: Language is English')
            .assert.urlContains('as_qdr=m', 'Params: Time period is last month')

        browser.assert.visible(resultsPageQuerySelector, 'UI: Harry Potter is in the query input')
    }
}