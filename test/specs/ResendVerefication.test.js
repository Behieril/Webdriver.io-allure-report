const verification = require('../pageobjects/Verification')

describe('Verification function test', async() => {

    before(() => {
        verification.CookiesSkip()
    });
    
    it('Resend verification test', async() => {
        await browser.url('https://portal.telnyx.com/#/login/resend-email')
        await verification.Email()
        await verification.SendBtnClick()
        await expect(verification.Notification).toBeDisplayed()
    })
})