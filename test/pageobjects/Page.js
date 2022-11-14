module.exports = class Page {

    open (path='') {
        return browser.url(`https://telnyx.com/${path}`)
    }

    openportal (path='') {
        return browser.url(`https://portal.telnyx.com/${path}`)
    }

    opendevs (path='') {
        return browser.url(`https://developers.telnyx.com/${path}`)
    }

    opencommunity (path='') {
        return browser.url(`https://community.telnyx.com/${path}`)
    }

    async fillField(field, value){
        await this.waitUntilElementDisplayed(field)
        await field.setValue(value)
    }

    async clickAtElement(element){
        await element.waitForEnabled()
        await element.click()
    }

    async MoveToElement(element){
        await this.waitUntilElementDisplayed(element)
        await element.moveTo()
    }
    async isElementDisplayed(element){
        return await element.isDisplayed()
    }

    async isElementClickable(element){
        return await element.isClickable()
    }

    async waitUntilElementClickable(element){
        await browser.waitUntil(
            async ()=>{return this.isElementClickable(element)},{
                timeout: 10000,
                timeoutMsg: 'expect element to be clickable after 5s'
            }
        )
    }

    async waitUntilElementDisplayed(element){
        await browser.waitUntil(
            async ()=>{return this.isElementDisplayed(element)},{
                timeout: 10000,
                timeoutMsg: 'expect element to be displayed after 5s'
            }
        )
    }
}
