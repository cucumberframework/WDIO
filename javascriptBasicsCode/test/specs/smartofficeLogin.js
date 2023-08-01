
describe('Smartoffice Application', async () => {

    xit("Login into SO with invalid credentials", async () => {

        await browser.url("https://sodev.ebixcrm.com/ms/index.htm")

        await browser.maximizeWindow()
        await browser.switchToFrame(0)

        
        await $("#Office").setValue("bobbyms")
        await $("#User").setValue('bobby')
        await $('#Pwd').setValue("ecpdemo1")
        await $("#submit").click()

        






    })

})
