const storage = require('../pageobjects/StoragePage')
const network = require('../pageobjects/NetworkPage.js')
const carrers = require('../pageobjects/CarrersPage')
const sip = require ("../pageobjects/Sip-trunks-Page.js")

describe('Storage page content test', async() => {

  before(() => {
    storage.CookiesSkip()
  });
  
  it('Storage test page', async() => {
    await storage.open()
    await expect(storage.MapImg).toBeDisplayed()
    await storage.Benefits.scrollIntoView()
    await expect(storage.PayLessImg).toBeDisplayed()
    await expect(storage.AccessFasterImg).toBeDisplayed()
    await expect(storage.MigrateImg).toBeDisplayed()
    await expect(storage.DataImg).toBeDisplayed()
    await storage.QuestionsZone.scrollIntoView()
    await expect(storage.Q1text).toBeDisplayed()
    await storage.Q1Btn.click()
    await expect(storage.Q2text).toBeDisplayed()
    await storage.Q2Btn.click()
    await expect(storage.Q3text).toBeDisplayed()
    await storage.Q3Btn.click()
    await expect(storage.Q4text).toBeDisplayed()
    await storage.Q4Btn.click()
    await expect(storage.Q5text).toBeDisplayed()
    await storage.Q5Btn.click()
    await expect(storage.Q6text).toBeDisplayed()
    await storage.Q6Btn.click()
    await expect(storage.Q7text).toBeDisplayed()
    await storage.Q7Btn.click()
    await expect(storage.Q8text).toBeDisplayed()
    await storage.Q8Btn.click()
    await expect(storage.Q9text).toBeDisplayed()

  });

it('Network page test', async() => {
    await network.open()
    await network.ScrollToMap()
    await expect(network.MapOurNetworkImg).toBeDisplayed()
    await network.MapImageCNBtnClick()
    await expect(network.MapCNImg).toBeDisplayed()
    await network.ScrollScheme()
    await expect(network.SchemeOurNetworkImg).toBeDisplayed()
    await network.SchemeCNBtnClick()
    await expect(network.SchemeCNImg).toBeDisplayed()
});

it('Carrers page test', async() => {
        
    await carrers.open();

    await carrers.Scroll()

    await carrers.ClickOnNext()

    await carrers.ClickOnPrevious()

    await carrers.ClickOn1slide()

    await expect(carrers.png_1).toBeDisplayed()

    await carrers.ClickOn2slide()

    await expect(carrers.png_2).toBeDisplayed()

    await carrers.ClickOn3slide()

    await expect(carrers.png_3).toBeDisplayed()
});

it('SIP page test', async() => {
    
    await sip.open()

    await sip.ScrolltoVideo()

    await expect(sip.Video).toBeDisplayed()

    await sip.ScrollToPros()

    await expect(sip.ProsImg).toBeDisplayed()

    await expect(sip.Question1text).toBeDisplayed()

    await sip.Question2Btn()

    await await expect(sip.Question2text).toBeDisplayed()

    await sip.Question3Btn()

    await await expect(sip.Question3text).toBeDisplayed()

    await sip.Question4Btn()

    await await expect(sip.Question4text).toBeDisplayed()

    await sip.Question5Btn()

    await await expect(sip.Question5text).toBeDisplayed()

    await sip.Question6Btn()

    await await expect(sip.Question6text).toBeDisplayed()

});
});