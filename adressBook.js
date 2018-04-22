var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

var adressBookLoginPage = require('./adressBookLoginPage');
global.driver = driver;

//@test1
adressBookLoginPage.goToPage().then(()=>{
    adressBookLoginPage.login('admin','secret').then(()=>{
        adressBookLoginPage.submit().then((groupPage)=>{
            groupPage.addNewGroup('test1_groupName','test1_groupHeader','test1_groupFooter').then(()=>{
                groupPage.goToGroupPage().then(()=>{
                    groupPage.deleteGroup().then(()=>{
                        groupPage.goToGroupPage().then(()=>{
                            groupPage.logout();
                        })
                    });
                })
            }) 
      })
    });
})  
//@test2
//var pagesTable=['home','add new','map','next birthdays','export','import'];
//adressBookLoginPage.goToPage().then(()=>{
  //  adressBookLoginPage.login('admin','secret').then(()=>{
    //    adressBookLoginPage.submit().then((tabs)=>{for(i=0;i<pagesTable.length;i++){
      //     tabs.goTo(pagesTable[i])}
        //})
    //});
//}) 