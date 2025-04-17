const {test, expect} = require ('@playwright/test')

test('Validate a user can navigate to Amazon URL', async function({browser}){
    
     const newContent = await browser.newContext()
     const page = await newContent.newPage()

     await page.goto('https://www.amazon.in/')
     await expect(page.locator('.nav-logo-link')).toHaveAttribute('aria-label', 'Amazon.in')
})