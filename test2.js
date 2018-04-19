var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

driver.manage().window().maximize();
global.driver = driver;

var LoginPage = require('./pages/loginPage');

// var loginPage = LoginPage;
// loginPage.goTo().then(() => {
//     loginPage.fillCredentials('admin@yourstore.com', 'admin').then(() => {
//         loginPage.login().then((dashboardPage) => {
//             driver.sleep(3000).then(()=>{
//                 dashboardPage.logout();
//             })    
//         })
//     })
// })

var loginPage = LoginPage;
loginPage.goTo().then(() => {
    loginPage.fillCredentials('admin@yourstore.com', 'admin').then(() => {
        loginPage.login().then((dashboardPage) => {
            dashboardPage.getTitle().then((title) => {
               console.log(title);
               // expect(title).toEqual('Dashboard / nopCommerce administration');
            });
        })
    })
})

