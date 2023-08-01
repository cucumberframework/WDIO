const loginPage = require('../pageObjects/loginPage')
const homepage = require('../pageObjects/HomePage')
const exploreTemplate = require('../pageObjects/ExploreTemplates')
const createSurvey = require('../pageObjects/CreateSurveyPage')
const surveyDetailsPage = require('../pageObjects/SurveyDetails')
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

            //clicking in Start from scratch button 
            await createSurvey.startFromScratch.waitForDisplayed({ timeout: 30000 })
            await createSurvey.startFromScratch.click()

            //Entering survey details 
            await createSurvey.surveyTitle.setValue("TestSurvey")

            //clicking on create survey button 
            await createSurvey.createSurveyButton.click()

            //wait for New survey page is loaded             
            await browser.pause(5000)
            await browser.waitUntil(async () => (await surveyDetailsPage.buildOption.isDisplayed(), { timeout: 300000 }))
            await surveyDetailsPage.buildOption.click()

            //Selecting multichoice option 
            await browser.waitUntil(async () => (await surveyDetailsPage.multiChoice.isDisplayed(), { timeout: 300000 }))
            await surveyDetailsPage.multiChoice.click()

            //Entering title for the Question 1 
            await browser.waitUntil(async () => (await surveyDetailsPage.q1Title.isDisplayed(), { timeout: 300000 }))
            await surveyDetailsPage.q1Title.setValue("How Often You use survey monkey? ")


            //Changing Question type to Multichoice if required 
            await surveyDetailsPage.changeQTypeDropdown.click()
            await surveyDetailsPage.selectMultiChoiceOPtion.click()
            var allChoices = surveyDetailsPage.answerChoice
            var answerValues = ['daily', 'weekly', 'monthly']
            //Adding Answer choices 
            await allChoices[0].setValue(answerValues[0])
            await allChoices[1].setValue(answerValues[1])
            await allChoices[2].setValue(answerValues[2])


            //Clicking on save button to save question 1
            await browser.waitUntil(async () => (await surveyDetailsPage.saveButton.isClickable(), { timeout: 300000 }))
            await surveyDetailsPage.saveButton.click()

            //Waiting for the time till chcekbox question is available 
            await browser.pause(10000)
            await browser.waitUntil(async () => (await surveyDetailsPage.checkBoxesOption.isClickable(), { timeout: 20000 }))
            await surveyDetailsPage.checkBoxesOption.click()

            //Waiting and clicking on the Question 2 title 
            await browser.waitUntil(async () => (await surveyDetailsPage.q1Title.isDisplayed(), { timeout: 300000 }))
            await surveyDetailsPage.q1Title.setValue("Have You used survey monkey before?? ")

            //changing the Question to checkbox question
            await surveyDetailsPage.changeQTypeDropdown.click()
            await surveyDetailsPage.checkBoxesOption.click()
            var allChoices = surveyDetailsPage.answerChoice

            //Adding Answer choices for the Question
            await allChoices[0].setValue('Yes')
            await allChoices[1].clearValue()
            await allChoices[1].setValue('No')
            await surveyDetailsPage.saveButton.click()

            //valication for radio buttons 
            expect(await surveyDetailsPage.radioButton).toHaveAttrContaining('class', 'radio-button-label-text', { message: "Multipicklist option is NOT available" })
            //validation for checkbox 
            expect(await surveyDetailsPage.checkBoxYes).toHaveAttrContaining('class', 'checkbox-button-label', { message: "Checkbox Questions are NOT available" })

            await browser.pause(5000)
            await $("#question-field-144682183").moveTo()
            browser.pause(2000)
            await $("=DELETE").click()

            /*//await browser.pause(20000)
            await browser.waitUntil(async () => (await $("td.questionText div")).isClickable(), { timeout: 30000 })
            //await browser.waitUntil(async() => (await $("td.questionText div")).isClickable(), { timeout: 30000 })

            let buttonState = await $("td.questionText div").isClickable()
            // var questions=$$("#editTitle")
            await $("td.questionText div").click()
            
            await $("td.questionText div").setValue("test")
            await $("a[data-action='MultipleChoiceQuestion']").click()
            await $("a[data-action='CheckboxQuestion']").click()
            var choices1 = $$("div[id*='newChoice']")
            await choices1[0].setValue('Yes')
            await choices1[1].setValue('No')
            await $('=SAVE').click()
            await browser.pause(15000)
            */




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
