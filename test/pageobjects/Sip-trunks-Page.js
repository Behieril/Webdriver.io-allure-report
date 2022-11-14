const Page = require('./Page');

class SIP extends Page{

    get Cookies(){return $('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1')}

    async CookiesSkip(){
        await this.Cookies.click()
    }
    
    async ScrolltoVideo(){

        await $("div.wrapper").scrollIntoView()

    }

    async ScrollToPros(){
        await $("div.sc-b6c174dd-0.gDIODu").scrollIntoView()
    }

    get Video(){return $("div#one>video")}

    get ProsImg(){return $("(//div[@class='sc-b5e72f6c-0 hVKrfv']//img)[2]")}

    open () {
        return super.open('products/sip-trunks');
    }

    get Question1(){return $("button[data-faq-question='0']")}
    get Question2(){return $("button[data-faq-question='1']")}
    get Question3(){return $("button[data-faq-question='2']")}
    get Question4(){return $("button[data-faq-question='3']")}
    get Question5(){return $("button[data-faq-question='4']")}
    get Question6(){return $("button[data-faq-question='5']")}

    async Question1Btn(){
        await this.clickAtElement(this.Question1)
    }

    async Question2Btn(){
        await this.clickAtElement(this.Question2)
    }

    async Question3Btn(){
        await this.clickAtElement(this.Question3)
    }

    async Question4Btn(){
        await this.clickAtElement(this.Question4)
    }

    async Question5Btn(){
        await this.clickAtElement(this.Question5)
    }

    async Question6Btn(){
        await this.clickAtElement(this.Question6)
    }

    get Question1text(){return $("div#faq1_description>p")}
    get Question2text(){return $("div#faq2_description>p")}
    get Question3text(){return $("div#faq3_description>p")}
    get Question4text(){return $("div#faq4_description>p")}
    get Question5text(){return $("div#faq5_description>p")}
    get Question6text(){return $("div#faq6_description>p")}
}
module.exports = new SIP();