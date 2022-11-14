const Page = require('./Page');

class NetworkPage extends Page{

    get Cookies(){return $('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1')}

    async CookiesSkip(){
        await this.Cookies.click()
    }

    get MapImageCNButton(){return $('#tab-2IXQpgM9HStNH0WnUUiWCw > .sc-5c377f4c-3')}

    get SchemeCNButton(){return $('#tab-4azmFSNfuMMzXK062TEcHx > .sc-5c377f4c-3')}
    
    get Map(){return $('#tab-5qKqtUbJNN3vVehx6JvATL > .sc-5c377f4c-3')}

    get Scheme(){return $('#tab-Sq8ENgsX3FFJrQ1xYXJAa > .sc-5c377f4c-3')}

    get MapOurNetworkImg(){return $('#content-5qKqtUbJNN3vVehx6JvATL > .sc-5c7b8005-4 > .sc-5c7b8005-5 > .sc-b5e72f6c-0 > div > img')}

    get MapCNImg(){return $('#content-2IXQpgM9HStNH0WnUUiWCw > .sc-5c7b8005-4 > .sc-5c7b8005-5 > .sc-b5e72f6c-0 > div > img')}

    get SchemeOurNetworkImg(){return $("(//source[@type='image/webp']/following-sibling::img)[1]")}

    get SchemeCNImg(){return $("(//source[@type='image/webp']/following-sibling::img)[2]")}
    async MapImageCNBtnClick(){
        await this.clickAtElement(this.MapImageCNButton)
    }
    async SchemeCNBtnClick(){
        await this.clickAtElement(this.SchemeCNButton)
    }

    async ScrollToMap(){
        await this.Map.scrollIntoView()
    }
    async ScrollScheme(){
        await this.Scheme.scrollIntoView()
    }
    open () {
        return super.open('solutions/global-ip-network');
    }
}
module.exports = new NetworkPage();