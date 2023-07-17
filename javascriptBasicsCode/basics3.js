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

