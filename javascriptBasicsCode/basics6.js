let person={

    firstName: 'Rahul', 
    lastName: 'Barapatre'
}

console.log(person.firstName)

//method 2 to access the property
console.log(person['firstName'])

//Changing the value from the object 
person.firstName='Megha'
console.log(person.firstName)

//Adding new values in the object 
person.gender= 'Male'
console.log(person)

//deleting the calue from the object 
delete person.gender
console.log(person)
