const loginPage = require('../pageObjects/loginPage')
const homepage = require('../pageObjects/HomePage')
const exploreTemplate = require('../pageObjects/ExploreTemplates')
const fs = require('fs')
const credentials = JSON.parse(fs.readFileSync('javascriptBasicsCode/testData/smLogin.json'))
describe('Survey monkey ', async () => {

    credentials.forEach(({ userName, password }) => {
        it("Survey monkey- Main Flow-Test case 1 ", async () => {

            await browser.url("https://www.surveymonkey.com")

            await browser.maximizeWindow()
            await loginPage.login(userName, password)
            await $("=Plans & Pricing").waitForDisplayed({ timeout: 30000 })
            await homepage.priceAndplans.click()
            await browser.waitUntil(async () => await homepage.createSurveyButton.isDisplayed(), { timeout: 10000 })
            await homepage.createSurveyButton.click()
            // await browser.waitUntil(async () => (await exploreTemplate.searchTemplates).isDisplayed(), { timeout: 30000 })

            //clicking in Start from scratch button 
            await $("div[class*='wds-icon-svg sm-g']").click()

            //Entering value in New survey box 
            await $("#surveyTitle").setValue("TestSurvey")

            //clicking on create survey button 

            await $("button[class*='wds-button wds-button--primary wds-button--solid wds-button--md sm-start-from-scratch-modal__footer-create-cta']").click()

            //wait for New survey page is loaded 
            //Enter first Question 
            await browser.waitUntil(async() => (await $("#editTitle")).isDisplayed(), { timeout: 300000 })
           
            await $("#editTitle").setValue("How Often You use survey monkey? ")

            await $("#changeQType").click()
            await $("a[data-action='MultipleChoiceQuestion']").click()
            var choices= $$("div[id*='newChoice']")

            await choices[0].setValue('daily')
            await choices[1].setValue('weekly')
            await choices[2].setValue('monthly')
            //await browser.pause(20000)
            
             //clicking on Next question 
             await browser.waitUntil(async() => (await $(".editor-buttons a")).isClickable(), { timeout: 300000 })

            //await $(".editor-buttons a").waitForDisplayed({timeout:20000,timeoutMsg:"Next Question button is NOT visible"})
             await $(".editor-buttons a").click()

             //await browser.pause(20000)
             await browser.waitUntil(async() => (await $("td.questionText div")).isClickable(), { timeout: 30000 })
             await browser.waitUntil(async() => (await $("td.questionText div")).isClickable(), { timeout: 30000 })
             
             let buttonState= await $("td.questionText div").isClickable()
            // var questions=$$("#editTitle")
             await $("td.questionText div").click()
             await $("td.questionText div").setValue("test")
             await $("a[data-action='MultipleChoiceQuestion']").click()
             await $("a[data-action='CheckboxQuestion']").click()
             var choices1= $$("div[id*='newChoice']")
             await choices1[0].setValue('Yes')
             await choices1[1].setValue('No')
             await $('=SAVE').click()
             await browser.pause(15000)






            //await exploreTemplate.searchTemplates.waitForDisplayed({timeout:5000})
            // console.log("Texxt to be displayed=" + await exploreTemplate.getCustomerSatisfactionTemplate.getText())
            //dynamic wait added to wait until Customer Satisfaction Template is displayed 
            //await browser.waitUntil(async () => await exploreTemplate.getCustomerSatisfactionTemplate.isDisplayed(), { timeout: 20000 })


            /*
                    
                    //
                    await browser.pause(5000)
                    await $("=Create survey").click()
                   await $("//input[@placeholder='Search templates']").waitForDisplayed({ timeout: 5000 })
                    console.log("Texxt to be displayed=" + await $("//span[contains(text(),'Customer Satisfaction Template')]").getText())
                    --//dynamic wait added to wait until Customer Satisfaction Template is displayed 
                    --await browser.waitUntil(async () => await $("//span[contains(text(),'Customer Satisfaction Template')]").isDisplayed(), { timeout: 20000 })
                    --await $("//span[contains(text(),'Customer Satisfaction Template')]").click()
            
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
            
            */



        })

    })
});
