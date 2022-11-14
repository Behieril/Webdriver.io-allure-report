const Page = require('./Page');

class Storage extends Page{

    get Cookies(){return $('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1')}

    async CookiesSkip(){
        await this.Cookies.click()
    }
    get MapImg(){return $('div.sc-5c7b8005-4.fJhMyK')}

    get Benefits(){return $("//span[text()='BENEFITS']")}

    get PayLessImg(){ return $("(//div[@class='sc-b5e72f6c-0 hVKrfv']//img)[3]")}

    get AccessFasterImg(){ return $("//source[@type='image/webp']/following-sibling::img[1]")}

    get MigrateImg(){return $("(//div[contains(@class,'sc-470d840-0 sc-7b4ce54b-0')])[3]")}
    
    get DataImg(){return $("(//div[contains(@class,'sc-470d840-0 sc-7b4ce54b-0')])[3]")}

    get QuestionsZone(){return $('h2.Text-sc-5o8owa-0.sc-fec4993d-2')}

    get Q1text(){return $("div#faq1_description>p")}
    get Q2text(){return $("div#faq2_description>p")}
    get Q3text(){return $("div#faq3_description>p")}
    get Q4text(){return $("#faq4_description")}
    get Q5text(){return $("div#faq5_description>p")}
    get Q6text(){return $("#faq6_description")}
    get Q7text(){return $("#faq7_description")}
    get Q8text(){return $("#faq8_description")}
    get Q9text(){return $("#faq9_description")}

    get Q1Btn(){return $("button[data-faq-question='1']")}
    get Q2Btn(){return $("button[data-faq-question='2']")}
    get Q3Btn(){return $("button[data-faq-question='3']")}
    get Q4Btn(){return $("button[data-faq-question='4']")}
    get Q5Btn(){return $("button[data-faq-question='5']")}
    get Q6Btn(){return $("button[data-faq-question='6']")}
    get Q7Btn(){return $("button[data-faq-question='7']")}
    get Q8Btn(){return $("button[data-faq-question='8']")}

    open () {
        return super.open('products/storage');
    }
}

module.exports = new Storage();