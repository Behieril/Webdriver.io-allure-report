const Page = require('./Page');


class CommLogin extends Page{

    open () {
        return super.opencommunity('users/login.html');
    }

    get Username(){return $("#username")}

    async UsernameInput(){
        await this.fillField(this.Username, "Sted")
    }

    get Password(){return $("#password")}

    async PasswordInput(){
        await this.fillField(this.Password, "as';zx/.2@")
    }

    get Submit(){return $("input[type='submit']")}

    async SubmitBtn(){
        await this.Submit.click()
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

module.exports = new CommLogin()