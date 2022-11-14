const dev = require ("../pageobjects/TelnyxDevelopersPage.js")

describe('Developers page test', async() => {
    
    it('Side panel', async() => {
        
        await dev.open()

        await browser.pause(5000)

        await expect(dev.SidePanel).toBeDisplayed()

        await dev.AccountBtn()

        await browser.pause(5000)

        await expect(dev.AccountContent).toBeDisplayed()

        await dev.MessagingBtn()

        await browser.pause(5000)

        await expect(dev.MessagingContent).toBeDisplayed()

        await dev.VerifyBtn()

        await browser.pause(5000)

        await expect(dev.VerifyContent).toBeDisplayed()

        await dev.PhoneBtn()

        await browser.pause(5000)

        await expect(dev.PhoneContent).toBeDisplayed()

        await dev.PortingBtn()

        await browser.pause(5000)

        await expect(dev.PortingContent).toBeDisplayed()

        await dev.CallClick()

        await browser.pause(5000)

        await expect(dev.CallControll).toBeDisplayed()

        await dev.FaxBtn()

        await browser.pause(5000)

        await expect(dev.FaxContent).toBeDisplayed()

        await dev.SIPBtn()

        await browser.pause(5000)

        await expect(dev.SIPContent).toBeDisplayed()

        await dev.WebRTCBtn()

        await browser.pause(5000)

        await expect(dev.WebRTCContent).toBeDisplayed()

        await dev.VideoBtn()

        await browser.pause(5000)

        await expect(dev.VideoContent).toBeDisplayed()

        await dev.WirelessBtn()

        await browser.pause(5000)

        await expect(dev.WirelessContent).toBeDisplayed()

        await dev.MediaBtn()

        await browser.pause(5000)

        await expect(dev.MediaContent).toBeDisplayed()

        await dev.NetworkingBtn()

        await browser.pause(5000)

        await expect(dev.NetworkingContent).toBeDisplayed()

        await dev.DebugBtn()

        await browser.pause(5000)

        await expect(dev.DebugContent).toBeDisplayed()

    });

    it('API 1 test', async() => {
        
        await browser.url("https://developers.telnyx.com/docs/v1")

        await dev.MessagingBtn()

        await browser.pause(5000)

        await expect(dev.content).toBeDisplayed()

        await dev.NumbersBtn()

        await browser.pause(5000)

        await expect(dev.content).toBeDisplayed()

        await dev.CallClick()

        await browser.pause(5000)

        await expect(dev.content).toBeDisplayed()

        await dev.SIPBtn()

        await browser.pause(5000)

        await expect(dev.content).toBeDisplayed()

        await dev.APIv2Btn()
        

    });

});