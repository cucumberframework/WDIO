class SurveyDetails {


    get buildOption() {
        return $("li[title='Build']")
    }

    get multiChoice() {
        return $("a[class='qmc']")
    }

    get checkBoxesOption() {
        return $("a[class='qchb']")
    }

    get q1Title() {
        return $("#editTitle")
    }
    get changeQTypeDropdown() {
        return $("#changeQType")
    }
    get selectMultiChoiceOPtion() {
        return $("a[data-action='MultipleChoiceQuestion']")
    }

    get answerChoice(){ 
        return $$("div[id*='newChoice']")
    }

    get saveButton(){ 
        return $('=SAVE')
    }
    get radioButton(){ 
        return $("//span[contains(text(),'monthly')]")
    }

    get checkBoxYes(){ 
        return $("//span[contains(text(),'Yes')]")
    }
}
module.exports = new SurveyDetails()