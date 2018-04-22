var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class Tabs{
    goTo(nameOfThePage){
        return driver.findElement(By.linkText(nameOfThePage)).click()
    }
}

module.exports = new Tabs();