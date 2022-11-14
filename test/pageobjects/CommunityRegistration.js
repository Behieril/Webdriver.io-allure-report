const Page = require('./Page');


class Reg extends Page{

    open () {
        return super.opencommunity('users/register.html');
    }

    get Username(){return $("#username")}

    async UsernameInput(){
        await this.fillField(this.Username, Math.random().toString(36).substring(2, 7))
    }

    get Email(){return $("input[name='email']")}

    async EmailInput(){
        await this.fillField(this.Email, Math.random().toString(36).substring(2, 7)+"@gmail.com")
    }

    get Password1(){return $("#password1")}

    get Password2(){return $("#password2")}

    async PasswordInput(el){
        el = await Math.random().toString(36).substring(2, 7)
        await this.fillField(this.Password1, el)
        await this.fillField(this.Password2, el) 
    }

    get Register(){return $("input[type='submit']")}

    async RegisterBtn(){
        await this.Register.click()
    }
    
    get Open(){return $("#profile-menu-dropdown")}

    async OpenMenu(){
        await this.Open.click()
    }

    get ProfileMenu(){return $("#profile-link")}

    async Profile(){
        await this.ProfileMenu.click()
    }



}

module.exports = new Reg()