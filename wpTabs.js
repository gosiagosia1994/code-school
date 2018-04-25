var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class WpTabs{
    goTo(){
      return driver.get('http://ms.polsl.pl/');
    }
    goToTab(nameOfTheTab){
        return driver.findElement(By.linkText(nameOfTheTab)).click();
    }
}

module.exports = new WpTabs();