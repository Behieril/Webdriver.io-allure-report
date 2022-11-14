const Page = require('./Page');

class SupportCentre extends Page{
    
    get SearchField(){return $("//input[contains(@class,'search__input js__search-input')]")}

    async SFfill(text){
        await this.fillField(this.SearchField, text)
        await browser.keys('\uE007')
    }

    async clickAtListElement(name){
        let el = await $(`//h2[text()='${name}']`)
        await this.clickAtElement(el)
    }

    get FirstResult(){return $("a[data-index='0']")}

    get FRText(){return $("(//span[@class='c__primary'])[1]")}

    async ClickOnFirsResult(){
        await this.clickAtElement(this.FirstResult)
    }

    async GetTextOfFR(){
        await $("(//span[@class='c__primary'])[1]").getText()
    }
    
    get CollectionTitle(){return $('h1.t__h1')}
    

    async GetTitleText(){

        $("h1.t__h1").getText()

    }

    async BackToMenu(){
        $("(//img[@alt='Telnyx Support'])[1]").click()
    }

    get SubmitSearchBtn(){return $("//button[@type='submit']")}



}
module.exports = new SupportCentre();