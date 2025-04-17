const {test, expect} = require ('@playwright/test')
const {MainPage} = require('../pageObjects/MainPage')

test.only('Validate a user can navigate to Amazon URL', async function({browser}){
    
     const newContent = await browser.newContext()
     const page = await newContent.newPage()

     await page.goto('https://www.amazon.in/')
     await expect(page.locator('.nav-logo-link')).toHaveAttribute('aria-label', 'Amazon.in',{timeout:10000})
})
test('Navigate to television section',async function({page}){
    const MainPage = new MainPage(page)

})
//Word