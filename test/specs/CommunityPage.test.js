const comm = require ("../pageobjects/CommunityPage")

describe('Community page test', async() => {

    it('Search test', async() => {
        
        await comm.open()

        await comm.SearchInput()

        await comm.FRClick()

        await expect(browser).toHaveUrlContaining("number")
    });
    
});