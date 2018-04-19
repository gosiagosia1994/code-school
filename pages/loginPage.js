var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class LoginPage {
    goTo() {
        driver.get('http://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    }

    fillCredentials(email, password) {
        driver.findElement(By.id('Email')).sendKeys(email);
        driver.findElement(By.id('Password')).sendKeys(password);
    }
    login() {
        driver.findElement(By.css("input.button-1.login-button")).click()
        return require('./dashboardPage');
    }
}

module.exports = new LoginPage();