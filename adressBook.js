var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var adressBookLoginPage = require('./adressBookLoginPage');
global.driver = driver;


adressBookLoginPage.goToPage().then(()=>{
    adressBookLoginPage.login('admin','private').then(()=>{
        adressBookLoginPage.submit()
    });
})