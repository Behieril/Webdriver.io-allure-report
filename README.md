# Webdriver.io-allure-report
Testing of telnyx.com in 20 test cases in cross environment
## Setup

### Install software and check out the project

- Download and install Node.JS ( at least 12.X )
- Clone and checkout the github project
- Go to the terminal and execute "npm install" inside the checked out folder

### How to run the tests on windows
Default configuration is (Firefox-chrome.wdio.conf.js) for tests in firefox and chrome browser.
It can executed with command: 
```
npm test
```
But if you want, you can execute tests only with chrome browser witch commant:
```
npm wdio:chrome
```
or with firefox browser:
```
npm wdio:firefox
```
### Test structure

All test cases should be coded inside the test folder. 

Test work with the Page Object Pattern described in <https://webdriver.io/docs/pageobjects.html>. The main idea is to encapsulate logic into page classes and use the logic in the spec files to run the tests.
