var webdriver =require('selenium-webdriver');
var By = webdriver.By;
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
driver.get('http://www.thetestroom.com/webapp');
driver.findElement(By.id('contact_link')).click();
driver.findElement(By.tagName('input')).sendKeys('Shahin');
driver.findElement(By.name('address_field')).sendKeys(' bat cave');