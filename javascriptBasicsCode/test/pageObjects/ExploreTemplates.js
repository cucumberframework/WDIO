class ExploreTemplates{ 


    get searchTemplates(){
        return $("//input[@placeholder='Search templates']")
    }

    get getCustomerSatisfactionTemplate(){ 
        return $("//span[contains(text(),'Customer Satisfaction Template')]")
    }

}
module.exports=new ExploreTemplates()