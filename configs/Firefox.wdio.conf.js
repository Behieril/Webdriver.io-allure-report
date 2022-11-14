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
        browserName: 'firefox',
        'moz:firefoxOptions': {
            args: ['--headless', '--no-sandbox','--disable-dev-shm-usage', '--allow-insecure-localhost', '--ignore-certificate-errors'],
        },
        acceptInsecureCerts: true
    }],

    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec',['allure', {outputDir: 'allure-results'}]],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    },
}
