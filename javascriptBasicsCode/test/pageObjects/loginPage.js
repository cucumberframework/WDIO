const reusable=require('../pageObjects/ReusableUtils')
class LoginPage  extends reusable{

    get loginButton() {

        return $('=Log in')
    }

    get userName() {

        return $("#username")
    }
    get password() {

        return $('#password')
    }

    get submitButton() {
        return $("button[type='submit']")
    }

    get forgetEmail() {
        return $('=Forgot email?')
    }

    get ssoButton(){
        return $('=SSO')
    }


    async login(userName, password) {
    //    this.clickOnWebElement(this.loginButton)
    //     this.waitForElement(this.loginButton)
        await this.loginButton.click()
        await this.userName.setValue(userName)
        await this.submitButton.click()
        await this.password.setValue(password)
        await this.submitButton.click()
        await browser.pause(15000)

    }
    



}
module.exports = new LoginPage()