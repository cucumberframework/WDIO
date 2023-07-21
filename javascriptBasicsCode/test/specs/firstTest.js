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
        console.log("Texxt to be displayed="+await $("//span[contains(text(),'Customer Satisfaction Template')]").getText())
        await $("//span[contains(text(),'Customer Satisfaction Template')]").click()
        browser.pause(6000)





    })

})
