module.exports= class Person 
{
    //Tutorial -22 code 

    age = 25

    get location() {

        return "Canada"
    }

    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName

    }
    fullName() {
        return this.firstName + this.lastName
    }
}


// let finalAge = new Person()
// console.log(finalAge.age)

// //to access the property with getter method 
// console.log(finalAge.location)

// //calling constructor
// let conCall = new Person("Rahul", "Barapatre")
// console.log(conCall.fullName())