var webdriver = require('selenium-webdriver');
var adressBookLoginPage = require('../adressBookLoginPage');

describe('Given login page', function() {

    beforeEach(function(done) {
        this.driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
        global.driver = this.driver;
        adressBookLoginPage.goToPage().then(done);
    });

    afterEach(function(done) {
        driver.quit().then(done);
    });

    it('When I fill form and click submit I should be on group page', function(done) {
        adressBookLoginPage.login('admin','secret').then(()=>{
            adressBookLoginPage.submit().then((groupPage)=>{
                driver.getTitle().then((title) => {
                    expect(title).toBe('Groups | Address Book');
                    done();
                });
          })
        })
    });
});