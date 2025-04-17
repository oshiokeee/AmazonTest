class MainPage {

    constructor()
    {
        this.allCategoryButton = page.locator("[aria-label='Open All Categories Menu']")
        this.tvApplianceElectronicBtn = page.locator("[data-ref-tag='nav_em_1_1_1_14']")
        this.televisons = page.locator('section ul li a:has-text("Televisions")')
    }
}