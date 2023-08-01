class Homepage{

    get priceAndplans(){ 
        return  $("=Plans & Pricing")
    }

    get createSurveyButton(){ 

        return $("=Create survey")
    }

}
module.exports=new Homepage()