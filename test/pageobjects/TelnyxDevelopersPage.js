const Page = require('./Page');

class Developers extends Page{

get SidePanel(){return $("div#docs-desktop-sidebar>div")}

get Account(){return $("(//span[text()='Account'])[1]")}

async AccountBtn(){
    await this.Account.click()
}

get AccountContent(){return $("(//span[text()='Managed Accounts'])[1]")}

open () {
    return super.opendevs('docs/v2');
}

get Messaging(){return $("(//span[text()='Messaging'])[1]")}

async MessagingBtn(){
    await this.Messaging.click()
}

get MessagingContent(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}

get Verify(){return $("(//span[text()='Verify'])[1]")}

async VerifyBtn(){
    await this.Verify.click()
}

get VerifyContent(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}

get Phone(){return $("(//span[text()='Phone Numbers'])[1]")}

async PhoneBtn(){
    await this.Phone.click()
}

get PhoneContent(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}

get Porting(){return $("(//span[text()='Porting'])[1]")}

async PortingBtn(){
    await this.Porting.click()
}

get PortingContent(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}

get CallControll(){return $("(//span[text()='Call Control'])[1]")}

async CallClick(){
    await this.CallControll.click()
}

get CallContent(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}

get Fax(){return $("(//span[text()='Programmable Fax'])[1]")}

async FaxBtn(){
    await this.Fax.click()
}

async FaxContent(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}

get SIP(){return $("(//span[text()='SIP Trunking'])[1]")}

async SIPBtn(){
    await this.SIP.click()
}

get SIPContent(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}

get WebRTC(){return $("(//span[text()='WebRTC'])[1]")}

async WebRTCBtn(){
    await this.WebRTC.click()
}

get WebRTCContent(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}

get Video(){return $("(//span[text()='Video Rooms'])[1]")}

async VideoBtn(){
    await this.Video.click()
}

get VideoContent(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}

get Wireless(){return $("(//span[text()='Wireless'])[1]")}

async WirelessBtn(){
    await this.Wireless.click()
}

get WirelessContent(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}

get Media(){return $("(//span[text()='Media'])[1]")}

async MediaBtn(){
    await this.Media.click()
}
get MediaContent(){return  $("(//a[contains(@class,'sc-619df07c-2 iCIRVj')])[1]")}

get Networking(){return $("(//span[text()='Networking'])[1]")}

async NetworkingBtn(){
    await this.Networking.click()
}

get NetworkingContent(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}

get Debug(){return $("(//span[text()='Debugging'])[1]")}

async DebugBtn(){
    await this.Debug.click()
}

get DebugContent(){return $("(//span[text()='Detail Record Search'])[1]")}

get Numbers(){return $("(//span[text()='Numbers'])[1]")}

async NumbersBtn(){
    await this.Numbers.click()
}

get content(){return $("(//div[@class='sc-5c6f030a-1 fARzjl'])[1]")}


get APIv2(){return $("(//button[text()='API v2'])[1]")}

async APIv2Btn(){
    await this.APIv2.click()
}
}
module.exports = new Developers();