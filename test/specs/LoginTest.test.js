const login = require('../pageobjects/Loginpage')

describe('E2E Login test', async() => {

  it('Login with wrong password', async() => {
    
    await browser.url("https://portal.telnyx.com/")

    await login.FillEmail("remontologist@gmail.com")

    await login.RandomPassword()

    await login.ClickLoginBtn()

    await expect(login.ErrorMessage).toBeDisplayed()

  });

  it('Login with wrong email', async() => {
    
    await browser.url("https://portal.telnyx.com/")

    await login.RandomEmail()

    await login.FillPassword("dfglmsknWpkd03@")

    await login.ClickLoginBtn()

    await expect(login.ErrorMessage).toBeDisplayed()

  });

  xit('Login with correct credentials', async() => {
    
    await browser.url("https://portal.telnyx.com/")

    await login.FillEmail("remontologist@gmail.com")

    await login.FillPassword("dfglmsknWpkd03@")

    await login.ClickLoginBtn()

    await expect(browser).toHaveUrlContaining('/app/numbers/search-numbers')
  });
});