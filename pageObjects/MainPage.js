const { expect } = require('@playwright/test');
const { televisionPage } = require('./televisionsPage');
class MainPage {

    constructor(page)
    {
        this.page = page
        this.allCategoryButton = page.locator("[aria-label='Open All Categories Menu']")
        this.menuList = page.locator('#hmenu-canvas:visible')
        this.tvApplianceElectronicBtn = page.locator('a.hmenu-item:has-text("TV, Appliances, Electronics"):visible')
        //this.televisons = page.locator('a.hmenu-item:has-text("Televisions"):visible').first()
        this.televisons = page.getByRole('link', { name: 'Televisions' }).nth(1)
    }
    
    async goTo()
    {
         await this.page.goto('https://www.amazon.in')
         await expect(this.page.locator('.nav-logo-link')).toBeVisible()
         await expect(this.page.locator('.nav-logo-link')).toHaveAttribute('aria-label', 'Amazon.in',{timeout:10000})
    }
    async navigateToTelevisionsPage()
    {
        await this.allCategoryButton.click()
        await this.menuList.waitFor({ state: "visible" });
        await this.tvApplianceElectronicBtn.scrollIntoViewIfNeeded();
        await this.tvApplianceElectronicBtn.click()
        await this.televisons.click()
        await this.televisons.waitFor({timeout:10000})

        return new televisionPage(this.page);
    }
}
module.exports = {MainPage};