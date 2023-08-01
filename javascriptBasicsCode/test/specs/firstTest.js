//const pet= require("@wdio/cli/build/constants")






describe('Survey monkey ', async () => {

    it("Survey monkey- create survey flow ", async () => {

        await browser.url("https://www.surveymonkey.com")

        await browser.maximizeWindow()
        await $('=Log in').click()
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

        //assertions to check the expected and actual 
        await expect($("#sampleResultsTab")).toHaveText("SAMPLE RESULTS")

        //check if we are on create survey page we will check the URL having the particular value
        await expect(browser).toHaveUrlContaining("create/")
        await browser.pause(8000)
        //check content of first question 

        //var frameElement = $("iframe[title='Survey Preview']")
        await browser.switchToFrame(0)

        const elementText = await $("//span[contains(text(),'How likely is it that you would recommend this company to a friend or colleague?')]")

        console.log("This is required text data to be displayed----->" + elementText.getText())
        //await expect (elementText).toHaveTextContaining("How likely is it that you would recommend this company to a friend or colleague?")

        // to grab all elements with same properties we need to use $$ then we need to take the index of hte element which is required 
        // var text = $$("span*='user-generated notranslate'")

        // console.log(await text[0].getText())

        // await browser.pause(8000)


        //click on 3rd value 
        const solution1 = $$("span.radio-button-display ")
        await solution1[2].click()
        //check if question 2 is displayed 
        await expect($("//span[contains(text(),'Overall, how satisfied or dissatisfied are you with our company?')]")).toBeDisplayed()
        const solution2 = $$("span.radio-button-label-text question-body-font-theme user-generated ")
        await solution2[1].click()
        await browser.pause(8000)





    })

})
