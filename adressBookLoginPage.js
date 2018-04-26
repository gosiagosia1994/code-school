var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class AdressBookLoginPage{
    goToPage(){
        return driver.get('http://localhost/addressbook/group.php');
    }
    login(user,password){
        return driver.findElement(By.name('user')).then((userBox)=>{
            return userBox.sendKeys(user).then(()=>{
                return driver.findElement(By.name('pass')).then((passBox)=>{
                    return passBox.sendKeys(password)
                })
            })
        })
    }
    submit(){
        return driver.findElement(By.xpath('//form[@id="LoginForm"]/input[3]')).then((loginButton) => {
            return loginButton.click().then(()=>{
                return require('./groupPage');
                })
        })
    }
}
module.exports = new AdressBookLoginPage();