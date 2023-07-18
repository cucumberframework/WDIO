let person = {

    firstName: 'Rahul',
    lastName: 'Barapatre',
    gender: 'Male',
    Address: 'Tent Line',
    fullName: function () {
        console.log(this.firstName + this.lastName)
    }
}

console.log(person.firstName)

//method 2 to access the property
console.log(person['firstName'])

//Changing the value from the object 
person.firstName = 'Megha'
console.log(person.firstName)

//Adding new values in the object 
person.gender = 'Male'
console.log(person)

//deleting the calue from the object 
delete person.gender
console.log(person)

//code for tutorial 21 
console.log('gender' in person)             //returns false if the property does NOT exist in the object 

//printing all key and values pair from the object 

for (let key in person) {
    console.log("Key is :" + key + " and value is :" + person[key])
}

console.log(person.fullName())