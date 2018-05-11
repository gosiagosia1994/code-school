var adressBookLoginPage = require('../pages/adressBookLoginPage');
var groupPage = require('../pages/groupPage');
describe('Given group page', function () {
    beforeEach(function () {
        adressBookLoginPage.goToPage().then(() => {
            adressBookLoginPage.login('admin', 'secret').then(() => {
                adressBookLoginPage.submit();
            })
        });
    });
    afterEach(function() {
        groupPage.logout();
    });   

    it('When I fill form and click submit I should be on group page', function () {

        groupPage.addNewGroup('test1_groupName', 'test1_groupHeader', 'test1_groupFooter').then((success) => {
            expect(success).toBe(true);

        })

    });
});
