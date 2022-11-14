const Page = require('./Page');

class LogIn extends Page{

    get Email(){return $("(//input[@name='email'])[1]")}

    get Password(){return $("input[name='password']")}

    get LogInBtn(){return $("//button[text()='Log in']")}

    async FillEmail(email){
        await this.Email.addValue(email)
    }

    async FillPassword(pass){
        await this.Password.addValue(pass)
    }
    
    async ClickLoginBtn(){
        this.clickAtElement(this.LogInBtn)
    }

    async RandomEmail(){
        await this.Email.addValue(Math.random().toString(36).substring(2,7)+'@gmail.com')
    }

    async RandomPassword(){
        await this.Password.addValue(Math.random().toString(36).substring(2,7))
    }

    get ErrorMessage(){return $('div.Message__MessageContent-sc-1lbs5ge-1.ijTSPa')}

}
module.exports = new LogIn();