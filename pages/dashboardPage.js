var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class DashboardPage {

    logout() {
        driver.findElement(By.linkText("Logout")).click();
    }
}

module.exports = new DashboardPage();