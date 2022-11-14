const Page = require('./Page');

class MainPage extends Page{
    
    get Cookies(){return $('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1')}
    
    async CookiesSkip(){
        await this.Cookies.click()
    }

    get Comments(){return $("div.sc-93eced66-0.cOoXBk")}

    get Slide_1(){return $("button[aria-label='Slide 1']")}

    get Slide_2(){return $("button[aria-label='Slide 2']")}

    get Comment_1(){return $("(//li[@class='sc-9cd1e3e2-2 fCiTXY'])[1]")}

    get Comment_2(){return $("(//li[@class='sc-9cd1e3e2-2 fCiTXY'])[2]")}

    async Scroll(){
        await this.Comments.scrollIntoView()
    }

    async Slide_1Click(){
        await this.Slide_1.click()
    }

    async Slide_2Click(){
        await this.Slide_2.click()
    }

    open () {
        return super.open('');
    }

    async Products(){
        await $("//span[text()='Products']").moveTo()
    }

    async ProductsClick(){
        await $("//button[text()='Products']").click()
    }

    get ProductsContent(){return $("(//div[contains(@class,'sc-14c941d7-1 sc-7b3980dc-4')])[1]")}

    async Solutions(){
        await $("//span[text()='Solutions']").moveTo()
    }

    async SolutionsClick(){
        await $("//button[text()='Solutions']").click()
    }

    get SolutionsContent(){return $("(//div[contains(@class,'sc-14c941d7-1 sc-7b3980dc-4')])[2]")}

    async Resources(){
        await $("//span[text()='Resources']").moveTo()
    }

    async ResourcesClick(){
        await $("//button[text()='Resources']").click()
    }

    get ResourcesContent(){return $("(//div[contains(@class,'sc-14c941d7-1 sc-7b3980dc-4')])[3]")}

    async Company(){
        await $("//span[text()='Company']").moveTo()
    }

    async CompanyClick(){
        await $("//button[text()='Company']").click()
    }

    get CompanyContent(){return $("(//div[contains(@class,'sc-14c941d7-1 sc-7b3980dc-4')])[4]")}

    async Pricing(){
        await $("//span[text()='Pricing']").moveTo()
    }

    async PricingClick(){
        await $("//button[text()='Pricing']").click()
    }

    get PricingContent(){return $("(//div[contains(@class,'sc-14c941d7-1 sc-7b3980dc-4')])[5]")}

    get SideMenuBtn(){return $("div[role='button']")}

    async ClickSideMenuBtn(){

        this.clickAtElement(this.SideMenuBtn)
    }

    get MenuContent(){return $('div.sc-6ef4e600-14.bWEfOz')}

    get Back(){return $("button.sc-6ef4e600-20.exZhBY")}

    async BackBtn(){
        await this.Back.click()
    }

}

module.exports = new MainPage();
