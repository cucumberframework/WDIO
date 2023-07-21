//const pet= require("@wdio/cli/build/constants")






describe('Smartoffice Application', async () => {

    it("Login into SO with invalid credentials", async () => {

        await browser.url("https://www.surveymonkey.com")

        await browser.maximizeWindow()
        await $('=Log In').click()
        await $("#username").setValue("rbrahulbarapatre@gmail.com")
        await $("button[type='submit']").click()
        await $('#password').setValue("Ra9423832079@")
        await $("button[type='submit']").click()

        await $("=Plans & Pricing").waitForDisplayed({ timeout: 30000 })
        //await $("=Plans & Pricing").click()
        await browser.pause(5000)
        await $("=Create survey").click()
        await $("//input[@placeholder='Search templates']").waitForDisplayed({ timeout: 5000 })
        console.log("Texxt to be displayed=" + await $("//span[contains(text(),'Customer Satisfaction Template')]").getText())
        //dynamic wait added to wait until Customer Satisfaction Template is displayed 
        await browser.waitUntil(async () => await $("//span[contains(text(),'Customer Satisfaction Template')]").isDisplayed(), { timeout: 20000 })
        await $("//span[contains(text(),'Customer Satisfaction Template')]").click()

        //waiting until preview button is displayed while creating new survey 
        await browser.waitUntil(async () => (await $("#surveyPreviewTab")).isDisplayed()), { timeout: 5000 }







    })

})
