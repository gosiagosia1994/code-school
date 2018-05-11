class GroupPage {
    addNewGroup(groupName, groupHeader, groupFooter) {
        return element(by.name('new')).click().then(() => {
            return element(by.name('group_name')).sendKeys(groupName).then(() => {
                return element(by.name('group_header')).sendKeys(groupHeader).then(() => {
                    return element(by.name('group_footer')).sendKeys(groupFooter).then(() => {
                        return element(by.name('submit')).click().then(() => {
                            return element(by.className('msgbox')).getText().then((text) => {
                                if (text.includes('A new group has been entered')) {
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            })

                        })
                    })


                })
            })
        })



    }

goToGroupPage() {
    return element(by.linkText("group page")).click();
}
deleteGroup() {
    return element(by.xpath('//div[@id="content"]/form/span[2]/input')).click().then(() => {
        
            return element(by.name('delete')).click();
        })
    
}
logout() {
    return element(by.linkText('Logout')).click();
}


}
module.exports = new GroupPage();