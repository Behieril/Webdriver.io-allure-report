const login = require('../pageobjects/Loginpage')
const parse = require("../../helpers/pars.js")
const accounts =  parse.parseJsonFile('./environments/accounts.json')

describe('E2E Login test', async() => {

  before('land to login page', async () => {

    await browser.url("https://portal.telnyx.com/")
    
  });

  it('Login with wrong password', async() => {

    await login.FillEmail(`${accounts["wrong_user_password"].username}`)

    await login.FillPassword(`${accounts["wrong_user_password"].password}`)

    await login.ClickLoginBtn()

    await expect(login.ErrorMessage).toBeDisplayed()

  });

  it('Login with wrong email', async() => {

    await login.FillEmail(`${accounts["wrong_user_username"].username}`)

    await login.FillPassword(`${accounts["wrong_user_username"].password}`)

    await login.ClickLoginBtn()

    await expect(login.ErrorMessage).toBeDisplayed()

  });

  xit('Login with correct credentials', async() => {

    await login.FillEmail(`${accounts["correct_user"].username}`)

    await login.FillPassword(`${accounts["correct_user"].password}`)

    await login.ClickLoginBtn()

    await expect(browser).toHaveUrlContaining('/app/numbers/search-numbers')
  });
});