const drivers = {
    chrome: { version: 'latest' }, // https://chromedriver.chromium.org/
    firefox: { version: 'latest' }, // https://github.com/mozilla/geckodriver/releases
    chromiumedge: { version: 'latest' } // https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
}

exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 10,

    capabilities: [{
        maxInstances: 1,
        browserName: "chrome",
        'goog:chromeOptions': {
            args: [ '--start-maximized', '--no-sandbox', '--disable-gpu','--disable-dev-shm-usage', '--allow-insecure-localhost', '--ignore-certificate-errors'],
        },
        },
    ],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 100000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver','edgedriver','firefox-profile'],
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
