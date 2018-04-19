var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class LoginPage {
    goTo() {
        return driver.get('http://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    }

    fillCredentials(email, password) {
        return driver.findElement(By.id('Email')).then((emailBox) => {
            console.log('Znalazlem element email');
            return emailBox.sendKeys(email).then(() => {
                console.log('Wypełniłem element email');
                return driver.findElement(By.id('Password')).then((passwordBox) => {
                    console.log('Znalazlem element password');
                    return passwordBox.sendKeys(password).then(() => {
                        console.log('Wypełniłem element password');
                        return true;
                    })
                })
            })
        })
    }
    login() {
        return driver.findElement(By.css("input.button-1.login-button")).then((loginButton) => {
            console.log('Znalazlem element login button');
            return loginButton.click().then(() => {
                console.log('Klikłem na element login button');
                return require('./dashboardPage');
            })
        })

    }
}

module.exports = new LoginPage();