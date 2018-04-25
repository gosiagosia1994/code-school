var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var wpTabs = require('./wpTabs');
global.driver = driver;

//test 1
wpTabs.goTo().then(()=>{
    wpTbs.goToTab('Rekrutacja')
    //.then(()=>{

   // })
});
