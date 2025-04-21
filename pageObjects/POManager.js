const {MainPage} = require('../pageObjects/MainPage')
const {televisionPage} = require('../pageObjects/televisionsPage')

class POManager
{
    constructor(page)
    {
         this.page = page
         this.mainPage = new MainPage(this.page)
         this.televisionPage = new televisionPage(this.page)
    }
    async getmainPage()
    {
         await this.mainPage.goTo()
    }
    async getTelevisionPage()
    {
        const televisionsPage = await this.mainPage.navigateToTelevisionsPage();
        await televisionsPage.checkSamsungBox();
        await televisionsPage.dropDown()
        await televisionsPage.comparePrice()
    }
}
module.exports = {POManager}