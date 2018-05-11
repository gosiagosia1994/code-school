class AdressBookLoginPage {

    goToPage() {
        return browser.get('http://localhost/addressbook/group.php');
    }

    login(user, password) {
        return element(by.name('user')).sendKeys(user).then(() => {
            return element(by.name('pass')).sendKeys(password)

        })

    }
    submit() {
        return element(by.xpath('//form[@id="LoginForm"]/input[3]')).click().then(() => {
            return require('./groupPage');
        })

    }
}
module.exports = new AdressBookLoginPage();