const Person=require('./basics7.js')
let day='tuesday '


let newObject=new Person("Rahul1","Barapatre1")
console.log(newObject.fullName())
//to get the length of the string 
console.log("String length is -->"+day.length)

//to take the substring of hte current string 
let subStringOfCurrentString= day.slice(2,4)
console.log(subStringOfCurrentString)

//get particular character from the string 
console.log("Char present at index3 is="+day[3])

//split the string based on the character 
let splittedString= day.split("s") 
console.log(splittedString)

let date1="10"
let date2="15"
let dateDifference= parseInt(date2)-parseInt(date1)             //parseInt will convert string to Integer 
console.log(dateDifference)

//convert string to integer 
console.log(dateDifference.toString())

//Tutorial 15 

//check how many times the occourance of string happend in 
let count=0

let day1="tuesday is funday"
let value=day1.indexOf("day")
while(value!=-1){ 
    count++
    let finalC= day1.indexOf("day",value+1)
}
console.log("Count is : "+count)

