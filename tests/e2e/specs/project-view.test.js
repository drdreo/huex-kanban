// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
    "project-view e2e tests": browser => {
        browser
            .url(process.env.VUE_DEV_SERVER_URL)
            .waitForElementVisible("#app", 5000)
            .assert.elementPresent(".project-view__header")
            .assert.containsText("h1", "Project Overview")
            .assert.elementPresent(".project-view__project_create")
            .end();
    }
};
