const Page = require('./Page');

class Community extends Page{

    open () {
        return super.opencommunity('users/register.html');
    }

    get Search(){return $("input[type='search']")}

    async SearchInput(){
        await this.fillField(this.Search, 'Number')
        await browser.keys('\uE007')
    }

    get FirstResult(){return $("(//h2[@class='title']//a)[1]")}

    async FRClick(){
        await this.FirstResult.click()
    }


}
module.exports = new Community();
