module.exports = {
    '@tags': ['google-page'],

    'Google advanced search using page: Harry Potter': (browser) => {
        const page = browser.page.googleAdvancedSearch()
        const mainQuery = 'Harry Potter'

        page
            .navigate()
            .setQuery(mainQuery)
            .selectFilter('@languageDropdown', 'lang_en')
            .selectFilter('@lastUpdateDropdown', 'm')
            .search()
    }
}