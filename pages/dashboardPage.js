var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class DashboardPage {

    logout() {
        driver.findElement(By.linkText("Logout")).click();
    }

    getTitle()
    {
        return driver.getTitle().then((title)=>{
            return title;
        })

    }
}

module.exports = new DashboardPage();