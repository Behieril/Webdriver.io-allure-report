const commreg = require("../pageobjects/CommunityRegistration")

describe('Community registration', async() => {

    it('Registration in community', async() => {

        await commreg.open()
    
        await commreg.UsernameInput()
    
        await commreg.EmailInput()
    
        await commreg.PasswordInput()
    
        await commreg.RegisterBtn()

        await commreg.OpenMenu()

        await commreg.Profile()
    
        await expect(browser).toHaveUrlContaining("https://community.telnyx.com/users")
    
    });
    
});