const {config} = require("./wdio.conf");
require("path");
const chromeHeadlessConfig = {
    ...config,
    services: [['chromedriver', {chrome: 'latest'}]], // https://chromedriver.chromium.org/
    //services: ["chromedriver"],
    capabilities: [{
        maxInstances: 5,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: ['--headless', '--start-maximized', '--no-sandbox', '--disable-gpu', '--allow-insecure-localhost']
        },
    }],
    logLevel: 'warn',

    path: "/wd/hub",

};

exports.config = chromeHeadlessConfig;