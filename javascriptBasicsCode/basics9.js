const Person=require('./basics7')
class pet extends Person{

    get location(){
        return "Nagpur"
    }


    constructor(firstName,lastName){
        super(firstName,lastName)
    }

    fullName(){ 
        console.log("This is child class method")
    }

    
}
let petName=new pet("Chiku","Barapatre")
console.log(petName.fullName())
console.log(petName.location)