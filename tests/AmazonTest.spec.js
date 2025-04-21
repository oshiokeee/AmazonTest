const {test, expect} = require ('@playwright/test')
const {POManager} = require('../pageObjects/POManager')

test.describe('Amazon Test',()=>{
    let poManager

test.beforeEach('Validate a user can navigate to Amazon URL', async function({browser}){
    
     const newContent = await browser.newContext()
     const page = await newContent.newPage()

     poManager = new POManager(page)

     await poManager.getmainPage()
     //await poManager.getTelevisionPage()
})
test('Select samsung options on television section',async function({page}){
    //const poManager = new POManager(page)
    await poManager.getTelevisionPage()
})
})