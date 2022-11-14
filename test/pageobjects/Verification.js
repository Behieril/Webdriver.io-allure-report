const Page = require('./Page');

class VerificationPage extends Page{

    get Cookies(){return $('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1')}

    async CookiesSkip(){
        await this.Cookies.click()
    }

    get EmailInputField(){return $("input[name='email']")}

    get SendEmailBtn(){return $("button[type='submit']")}

    get Notification(){return $('div.Message__MessageContent-gQIxgg.hGlGBT')}

    async Email(){
        await this.fillField(this.EmailInputField, Math.random().toString(36).substring(2, 35)+"@gmail.com")
    }

    async SendBtnClick(){
        await this.clickAtElement(this.SendEmailBtn)
    }
}
module.exports = new VerificationPage();