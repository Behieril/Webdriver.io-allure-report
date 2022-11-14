const commlogin = require ("../pageobjects/CommunityLogin")

describe('Community page login test', async() => {

    it('Login test', async() => {

        await commlogin.open()

        await commlogin.UsernameInput()

        await commlogin.PasswordInput()

        await commlogin.SubmitBtn()

        await commlogin.OpenMenu()

        await commlogin.Profile()

        await expect(browser).toHaveUrlContaining("sted")


        
    });
    
});