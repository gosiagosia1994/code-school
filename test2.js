var webdriver =require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
global.driver = driver;

var LoginPage = require('./pages/loginPage');
// var By = webdriver.By;
// var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
// driver.get('http://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
// driver.findElement(By.id('Email')).sendKeys('admin@yourstore.com ');
// driver.findElement(By.id('Password')).sendKeys('admin');
// //driver.findElement(By.tagName('input')).click();
// driver.findElement(By.css("input.button-1.login-button")).click();
// driver.findElement(By.linkText("Catalog")).click(); 
// driver.findElement(By.linkText("Products")).click(); 
// driver.findElement(By.linkText("Categories")).click(); 
// driver.findElement(By.linkText("Manufacturers")).click(); 
// driver.findElement(By.linkText("Bulk edit products")).click(); 
// driver.findElement(By.linkText("Product reviews")).click(); 
// driver.findElement(By.linkText("Product tags")).click(); 
// driver.findElement(By.linkText("Low stock report")).click(); 
// driver.findElement(By.linkText("Attributes")).click(); 
// driver.findElement(By.linkText("Product attributes")).click(); 
// driver.findElement(By.linkText("Specification attributes")).click(); 
//driver.findElement(By.name('address_field')).sendKeys(' bat cave');

// var loginPage = new loginPage();
// loginPage.goTo();
// loginPage.email = "admin@yourstore.com"
// loginPage.password = "admin";
// loginPage.RememberMe = true;
// console.log(loginPage.Header)
// loginPage.login();

var loginPage = LoginPage;
loginPage.goTo();
loginPage.fillCredentials('admin@yourstore.com','admin');
var dashboardPage = loginPage.login();
dashboardPage.logout();
