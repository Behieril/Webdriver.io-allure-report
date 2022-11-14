const mainpage = require('../pageobjects/MainPage.js');

describe('Main page tests', async() => {
    
    before(() => {
        mainpage.CookiesSkip()
    });

    it('Drop-down menu test', async() => {

        await mainpage.open()

        await browser.pause(5000)

        await mainpage.Products()

        await expect(mainpage.ProductsContent).toBeDisplayed()

        await mainpage.Solutions()

        await expect(mainpage.SolutionsContent).toBeDisplayed()

        await mainpage.Resources()

        await expect(mainpage.ResourcesContent).toBeDisplayed()

        await mainpage.Company()

        await expect(mainpage.CompanyContent).toBeDisplayed()

        await mainpage.Pricing()

        await expect(mainpage.PricingContent).toBeDisplayed()
        
    });

    it('Side menu test', async() => {

        await browser.setWindowSize(1000, 700)

        await mainpage.open()

        await browser.pause(5000)

        await mainpage.ClickSideMenuBtn()

        await mainpage.ProductsClick()

        await expect(mainpage.MenuContent).toBeDisplayed()

        await mainpage.BackBtn()

        await browser.pause(500)

        await mainpage.SolutionsClick()

        await expect(mainpage.MenuContent).toBeDisplayed()

        await mainpage.BackBtn()

        await browser.pause(500)

        await mainpage.ResourcesClick()

        await expect(mainpage.MenuContent).toBeDisplayed()

        await mainpage.BackBtn()

        await browser.pause(500)

        await mainpage.CompanyClick()

        await expect(mainpage.MenuContent).toBeDisplayed()

        await mainpage.BackBtn()

        await browser.pause(500)

        await mainpage.PricingClick()

        await expect(mainpage.MenuContent).toBeDisplayed()

        await mainpage.BackBtn()

    });

    it('Coments section test', async() => {

        await mainpage.open()

        await mainpage.Slide_1Click()

        await expect(mainpage.Comment_1).toBeDisplayed()

        await mainpage.Slide_2Click()

        await expect(mainpage.Comment_2).toBeDisplayed()
    });
});