var webdriver = require('selenium-webdriver');
var adressBookLoginPage = require('../adressBookLoginPage');
var groupPage = require('../groupPage');
describe('Given group page', function () {
    beforeEach(function (done) {
        this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        global.driver = this.driver;
        adressBookLoginPage.goToPage().then(() => {
            adressBookLoginPage.login('admin', 'secret').then(() => {
                adressBookLoginPage.submit().then(done)
            })
        });
    });

    afterEach(function (done) {
        driver.quit().then(done);
    });

    it('When I fill form and click submit I should be on group page', function (done) {

        groupPage.addNewGroup('test1_groupName', 'test1_groupHeader', 'test1_groupFooter').then((success) => {
            expect(success).toBe(true)
            done();

        })

    });
});
