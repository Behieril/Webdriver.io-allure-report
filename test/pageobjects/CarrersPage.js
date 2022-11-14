const Page = require('./Page');

class CareersPage extends Page {
    get ScrollObject(){return $("div[data-testid='wrapper']")}
    async Scroll(){
        await this.ScrollObject.scrollIntoView()
    }
    get NextButton(){return $("button[aria-label='Next Item']")}
    async ClickOnNext(){
        await this.NextButton.click()
    }
    get PreviousButton(){return $("button[aria-label='Previous Item']")}
    async ClickOnPrevious(){
        await this.PreviousButton.click()
    }
    get slide_1(){return $("button[aria-label='Slide 1']")}
    async ClickOn1slide(){
        await this.slide_1.click()
    }
    get slide_2(){return $("button[aria-label='Slide 2']")}
    async ClickOn2slide(){
        await this.slide_2.click()
    }
    get slide_3(){return $("button[aria-label='Slide 3']")}
    async ClickOn3slide(){
        await this.slide_3.click()
    }
    get Cookies(){return $('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1')}
    
    async CookiesSkip(){
        await this.Cookies.click()
    }
    get png_1(){return $("//li[@class='sc-9cd1e3e2-2 fCiTXY'][1]")}
    get png_2(){return $("//li[@class='sc-9cd1e3e2-2 fCiTXY'][2]")}
    get png_3(){return $("//li[@class='sc-9cd1e3e2-2 fCiTXY'][3]")}
    open () {
        return super.open('company/careers');
    }
}
module.exports = new CareersPage();