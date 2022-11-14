const registrationage = require("../pageobjects/RegistrationPage.js")

describe('Registration test', async() => {
    
    before(() => {
        registrationage.CookiesSkip()
    });
    it('From main page', async() => {

        registrationage.open()

        await registrationage.SignUpFromMainPage()

        await registrationage.TryForFreeBtn()

        await expect(browser).toHaveUrlContaining('afsjkln@gmail.com')
    });
});
