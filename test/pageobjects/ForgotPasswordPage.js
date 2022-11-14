const Page = require('./Page');


class ForgotPassword extends Page{
    get Email(){return $("input[name='email']")}

    async FillEmail(){
        await this.fillField(this.Email, Math.random().toString(36).substring(2, 7)+"@gmail.com")
    }

    get SubmitButton(){return $("button[type='submit']")}

    async Submit(){
        await this.clickAtElement(this.SubmitButton)
    }
    get Message(){return $("(//div[@type='success'])[2]")}

    open () {
        return super.openportal('#/login/password-reset');
    }

}

module.exports = new ForgotPassword()