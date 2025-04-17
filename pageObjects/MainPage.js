const { expect } = require('@playwright/test');
class MainPage {

    constructor(page)
    {
        this.page = page
        this.allCategoryButton = page.locator("[aria-label='Open All Categories Menu']")
        this.menuList = page.locator('#hmenu-canvas:visible')
        this.tvApplianceElectronicBtn = page.locator("[data-ref-tag='nav_em_1_1_1_14']:visible")
        this.televisons = page.locator('section ul li a:has-text("Televisions"):visible')
    }
    
    async goTo()
    {
         await this.page.goto('https://www.amazon.in/')
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

    }
}
module.exports = {MainPage};