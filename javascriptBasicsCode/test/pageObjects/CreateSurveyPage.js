class CreateSurveyPage {

    get startFromScratch() {
        
        return $("svg[aria-label='Document']")
        ////span[contains(text(),'Customer Satisfaction Template')]
    }

    get surveyTitle() {
        return $("#surveyTitle")

    }
    get createSurveyButton() {
        return $("button[class*='wds-button wds-button--primary wds-button--solid wds-button--md sm-start-from-scratch-modal__footer-create-cta']")
    }


}


module.exports = new CreateSurveyPage()
