const Page = require('./Page');

class RegistrationPage extends Page{

    get Cookies(){return $('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1')}

    async CookiesSkip(){
        await this.Cookies.click()
    }
    get Email(){return $("input[type='email']")}

    async SignUpFromMainPage(){
        await this.fillField(this.Email, 'afsjkln@gmail.com')
    }

    async TryForFreeBtn(){
        await this.clickAtElement(this.TryForFreeButton)
    }

    get FullName(){return $("#full_name")}
    
    async FillFullName(){
        await this.fillField(this.FullName, Math.random().toString(36).substring(2,7))
    }

    get Password(){return $('#password')}

    async FillPassword(){
        await this.fillField(this.Password, Math.random().toString(36).substring(2,7))
    }
    SignUp(){
        cy.get('.sc-14c941d7-5.sc-14c941d7-6 > .sc-5d3a275a-0 > .sc-5d3a275a-1').click()
    }

    EnterFullName(){
        cy.get('#full_name').type("Olegu Resyl")
    }
    EnterPassword(){
        cy.get('#password').type("kpcxzioioS233_P2PI2")
    }
    CreateAccountButtonClick(){
        cy.get('.sc-26f7330-6 > .sc-5d3a275a-0 > .sc-5d3a275a-1').click()
    }
    get AgreeCheck(){return $('.sc-26f7330-5 > .sc-e117dd75-0 > svg > rect')}
    async AgreeCheckClick(){
        await this.clickAtElement(this.AgreeCheck)
    }
    get SubmitButton(){return $("button[type='submit']")}
    async SubmitButtonClick(){
        await this.clickAtElement(this.SubmitButton)
    }
    EmailField(){
        cy.get('.sc-876fcb71-2').type(Math.random().toString(36).substring(2,7)+'@gmail.com')
    }
    async 
    get TryForFreeButton(){return $("button[type='submit']")}

    open () {
        return super.open('');
    }
}
module.exports = new RegistrationPage();



