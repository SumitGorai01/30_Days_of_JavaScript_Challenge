//Activity 1 : Variable declaration

// Task 1 : Declare a variable using var , assign it a number , and log the value to console

var myNumber = 100;
console.log(myNumber)

// Task 2 : Declare a variable using let , assign it a string , and log the value to console

let myName = "Sumit Gorai"
console.log(myName);

//Activity 2 : Constant declaration

//Task 3 : Declare a variable using const , assign it a boolean value , and log the value to the console

const isLoggedIn = false
console.log(isLoggedIn)

//Activity 3 : Data Types

//Task 4 : Create variables of different data types(number ,string,boolean,object , array) and log each variable's type using typeof operator

const score = 50
let name = "Sumit"
let isActive = false
let userDetails = {
    name : "Amit",
    age: 20,
    address : "India"
};
const myArray = [1,2,3,4,5]

console.log(typeof score)
console.log(typeof name)
console.log(typeof isActive)
console.log(typeof userDetails)
console.log(typeof myArray)

//Activity 5 : Understand const
//Task 6 : Try reassigning a variable declared with const and observe the error

const num = 50
console.log(num)

num = 100
console.log(num)