const supportcenter = require ('../pageobjects/SupportCentrePage')

describe('Support center test', async() => {

    it('Search field test', async() => {
        
        await browser.url('https://support.telnyx.com/en/')

        await supportcenter.SFfill("text")

        await browser.pause(5000)

        await supportcenter.GetTextOfFR()

        await supportcenter.ClickOnFirsResult()

        await expect(browser).toHaveUrlContaining("text")

    });

    it('Collections links test', async() => {
        
        await browser.url('https://support.telnyx.com/en/')

        await supportcenter.clickAtListElement('Getting Started')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/133094-getting-started')

        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Configuration Guides')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/133118-configuration-guides')

        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Messaging Articles and Guides')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/133103-messaging-articles-and-guides')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Voice and Fax')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/133140-voice-and-fax')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Porting Articles and Guides')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/133126-porting-articles-and-guides')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Billing & Pricing')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/133135-billing-pricing')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Programmable Wireless')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/1895859-programmable-wireless')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Tours and Videos')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/2029093-tours-and-videos')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('FAQs about Telnyx ')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/133131-faqs-about-telnyx')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('International DID Requirements')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/1511606-international-did-requirements')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Bulk Edit Numbers')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/1632711-bulk-edit-numbers')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Reporting Articles and Guides')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/2484711-reporting-articles-and-guides')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Everything SIP')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/2484718-everything-sip')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Programmable Applications')
        await supportcenter.BackToMenu()

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/2523082-programmable-applications')
        await supportcenter.BackToMenu()

        await supportcenter.clickAtListElement('Reference Material')

        await expect(browser).toHaveUrl('https://support.telnyx.com/en/collections/3263627-reference-material')
        await supportcenter.BackToMenu()

    });
});

