const { config } = require("./wdio.conf");
const path = require("path");

const firefoxschrome = {  
    config,
    services: [['chromedriver', {chrome: 'latest'}], ['selenium-standalone', {firefox: 'latest'}]],
    capabilities: [    
        {      
            maxInstances: 1,
            browserName: "firefox",
            acceptInsecureCerts : true,
            'moz:firefoxOptions': {
                args: ['--headless','--start-maximized', '--no-sandbox', '--disable-gpu','--disable-dev-shm-usage','--window-size=1900,1000', '--allow-insecure-localhost', '--ignore-certificate-errors']
            }, 
        },
        {
            maxInstances: 1,
            browserName: "chrome",
            'goog:chromeOptions': {
                args: ['--headless','--start-maximized', '--no-sandbox', '--disable-gpu','--disable-dev-shm-usage','--window-size=1900,1000', '--allow-insecure-localhost', '--ignore-certificate-errors'],
                excludeSwitches: ['--enable-logging']
            }
        }
    ],  

    path: "/wd/hub",  
    
};
exports.config = firefoxschrome;