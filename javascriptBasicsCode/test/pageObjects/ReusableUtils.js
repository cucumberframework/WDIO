module.exports= class ReusableUtils {

async waitForElement(webElement){ 
   await browser.waitUntil(async () => (await webElement.isClickable(), { timeout: 20000,timeOutmessage:webElement +"Is NOT Clickable" }))
}


async clickOnWebElement(webElement){ 
     this.waitForElement(webElement)
    if(webElement.isClickable()){ 
        this.webElement.click()
    }


}

}
