const forgotpassword = require('../pageobjects/ForgotPasswordPage.js')

describe('Forgot password page test', async() => {

  it('Function test', async() => {

    await forgotpassword.open()

    await forgotpassword.FillEmail()

    await forgotpassword.Submit()

    await expect(forgotpassword.Message).toBeDisplayed()
  })
})
