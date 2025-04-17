const {test, expect} = require ('@playwright/test')
const {MainPage} = require('../pageObjects/MainPage')

test.only('Validate a user can navigate to Amazon URL', async function({browser}){
    
     const newContent = await browser.newContext()
     const page = await newContent.newPage()

     const mainPage = new MainPage(page)
     await mainPage.goTo()
     await mainPage.navigateToTelevisionsPage()


})
test('Navigate to television section',async function({page}){
    const MainPage = new MainPage(page)

})
//Word