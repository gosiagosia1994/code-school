var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class GroupPage{
    addNewGroup(groupName,groupHeader,groupFooter){
        return driver.findElement(By.name('new')).then((addNewGroupBox)=>{
            return addNewGroupBox.click().then(()=>{
                return driver.findElement(By.name('group_name')).then((groupNameBox)=>{
                    return groupNameBox.sendKeys(groupName).then(()=>{
                        return driver.findElement(By.name('group_header')).then((groupHeaderBox)=>{
                            return groupHeaderBox.sendKeys(groupHeader).then(()=>{
                                return driver.findElement(By.name('group_footer')).then((gorupFooterBox)=>{
                                     return gorupFooterBox.sendKeys(groupFooter).then(()=>{
                                        return driver.findElement(By.name('submit')).then((submitBox)=>{
                                             return submitBox.click();
                                        })
                                     })
                                 })
                            })
                        })
                    })
                })
            })
        })
    }
    goToGroupPage(){
        return driver.findElement(By.linkText("group page")).click();
    }
    deleteGroup(){
        return driver.findElement(By.xpath('//div[@id="content"]/form/span[2]/input')).click().then(()=>{
            return driver.findElement(By.name('delete')).then((deleteBox)=>{
                return  deleteBox.click();
            })
        })
    }
    logout(){
        return driver.findElement(By.linkText('Logout')).click();
    }

}
module.exports = new GroupPage();