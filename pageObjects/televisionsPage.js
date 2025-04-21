const {expect} = require ('@playwright/test')

class televisionPage{

    constructor(page)
    {
        this.page = page
        this.samsungCheckBox = page.locator('li:has-text("Samsung") span.a-list-item')
        this.dropDownFilter = page.locator('#s-result-sort-select')
        this.dropDownOption = page.locator('li:has-text("Price: Low to High") .a-popover-inner')
        this.priceContainer = page.locator('[data-cy="price-recipe"]').nth(1)
    }

    async checkSamsungBox()
    {
        await this.samsungCheckBox.scrollIntoViewIfNeeded()
        await this.samsungCheckBox.click()
        const navigationPromise = await this.page.locator('[data-asin="B0B8YTGC23"]').first().waitFor({state:'visible'},{timeout: 10000})

        await navigationPromise
    }
    async dropDown()
    {
        
        await this.dropDownFilter.selectOption('Price: Low to High') // selectOption can only be used on select element
        await this.page.locator('[role="listitem"]').nth(1).waitFor({state: 'visible'},{delay:10000}) // just to ensure the page loads as expected
        await expect (this.dropDownFilter).toContainText('Price: Low to High')

    }
    async comparePrice()
    {
        await this.priceContainer.waitFor({state:"visible"})
        const priceCount = await this.page.locator('.a-price .a-price-whole').count()
        console.log(priceCount)

        let baseNumber = 0

        for(let i=0; i<priceCount; i++)
        {
            const priceText = await this.page.locator('.a-price .a-price-whole').nth(i).textContent()
            const cleanedPrice = parseInt(priceText.replace(/[₹,]/g, '').trim())

            if(i>0)
            {
                expect(cleanedPrice).toBeLessThanOrEqual(baseNumber)
            }
            baseNumber = cleanedPrice
        }
    }
}
module.exports = {televisionPage};