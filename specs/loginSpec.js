var adressBookLoginPage = require('../pages/adressBookLoginPage');
var groupPage = require('../pages/groupPage');
describe('Given login page', function() {

    beforeEach(function() {
        adressBookLoginPage.goToPage();
    });
    afterEach(function() {
        groupPage.logout();
    }); 

    it('When I fill form and click submit I should be on group page', function() {
        adressBookLoginPage.login('admin','secret').then(()=>{
            adressBookLoginPage.submit().then((groupPage)=>{
                browser.getTitle().then((title) => {
                    expect(title).toBe('Groups | Address Book');
                    
                });
          })
        })
    });
});