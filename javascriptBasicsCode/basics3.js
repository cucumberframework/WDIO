var marks= Array(6)

var marks = new Array(10,20,30,40,50,60)

//another method 

//var marks= [10,20,30,40,50,60]

//to print the value from the Array 

console.log(marks[2])   //30


//reassigning the value present in array 
marks[1]=150
console.log(marks[1])

//to get the length of array 
console.log(marks.length)           //6

//To append new element to an array 
marks.push(67)              //this will add new element to the existing array at the last 
console.log(marks)

//to delete the last emement from the end of an array 

marks.pop()
console.log(marks)


//to add the element from the beginning of an array 
marks.unshift(12)       //This will add 12 at the start of an array 
console.log(marks)


// Tutorial 12  begins from here 

//to get the index of particular element 
console.log("Index of 40 element is -->"+marks.indexOf(40))

//to check if particular emement is present in the array or NOT 
console.log("Does this array contains specific element ???  "+marks.includes(500))


//getting sub array from main array with slice method 
var subMarks= marks.slice(1,4)
console.log(subMarks)


//get sum of all elements of an array 
var sum=0
for(var r=0;r<marks.length;r++){
sum=sum+marks[r]
}
console.log("Sum of all the elements of array is --<"+sum)


//Tutorial 13 - Reduce method
var totalMarks=marks.reduce((sum,mark)=>sum+mark,0)
console.log(totalMarks)


//Filtering the array to get all even numbers 
let evenNumbercall=marks.filter(score=>score%2==0)
console.log("All Even Numbers are filtered here -->"+evenNumbercall)


//map-- 
var multipliedNumber=evenNumbercall.map(newVariable=>newVariable*3)
console.log(multipliedNumber)
//adding the variables after multiplying
var addition=multipliedNumber.reduce((sumStart,initialNumber)=>sumStart+initialNumber,0)
console.log(addition)

//we can reduce all this actions in single step with chaining 
let newArray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let finalValue=newArray.filter(sum1=>sum1%2==0).map(sum1=>sum1*3).reduce((sum2,acc)=>sum2+acc,0)
console.log(finalValue)

//tutorial- 15

//sorting of array 

let fruits=["banana","mango","grapes","apple"]
console.log(fruits.sort())
let fruits1=fruits.sort()
//reverse the sorting 
console.log(fruits1.reverse())

//sorting numbers, this will take two inputs and will sort according to it and will place the latest number first
let sortingInt=[1,152,3,200,6,7,8,85,10,11,1120,13,174,195,146,167,138,159,210]
console.log(sortingInt.sort((a,b)=>a-b))


//Tutorial 15 

