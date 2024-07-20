/**
 * Day 8: ES6+ Features 👀 
 */

/**
 * Activity 1: Template Literals ✔✅
 */

// --Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.✔✅
const name = "Sumit"
const age = 22
const message = `Hi , My name is ${name} and I am ${age} years old.`
console.log(message)

// --Task 2: Create a multi-line string using template literals and log it to the console.✔✅
const multiLineString = `
Hello ,
welcome to Chai aur Code .
Here you can learn programming languages .
`;
console.log(multiLineString)


/**
 * Activity 2: Destructuring ✔✅

 */

// --Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.✔✅
/**
 * Array destructuring :- Array destructuring is a feature in JavaScript that allows you to 
 * unpack values from arrays (orproperties from objects) into distinct variables in a concise 
 * and readable manner. This syntax makes it easy to extract elements from an array or properties 
 * from an object without needing to write repetitive code.
 */
const arr = [1, 2, 3, 4, 5];
const [first, second] = arr;
console.log("First Element : ", first)
console.log("Second Element : ", second)


// --Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.✔✅
/**
 * Object destructuring :- Object destructuring is a feature in JavaScript that allows you to 
 * extract properties from an object and assign them to variables. This feature provides a concise 
 * and readable way to access and manipulate object properties.
 */
const book = {
    title: "JavaScript",
    author: "Hitesh",
    year: 2024
}
const { title, author, year } = book;
console.log(`
Title : ${title}
author : ${author}
`)

/**
 * Activity 3: Spread and Rest Operators ✔✅
 */

// --Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. ✔✅
const myArray = [1, 2, 3, 4]
const newArray = [...myArray, 5, 6, 7, 8]

console.log("My Array : ", myArray)
console.log("New Array : ", newArray)


// --Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result. ✔✅
function sum(...numbers) {
    let total = 0
    for(let num of numbers){
        total = total +num
    }
    return total
}
let result = sum(1,2,3,4,5)
console.log(`Total = ${result}`)


/**
 *  Activity 4: Default Parameters ✔✅
 */

// --Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter. ✔✅

function multiplication(num1 , num2=1){
    return num1*num2;
}
console.log(`Multiplication = ${multiplication(4,5)}`)
console.log(`Multiplication = ${multiplication(4)}`)


/**
 * Activity 5: Enhanced Object Literals ✔✅

 */

// --Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. ✔✅
/**
 * 
 * Enhanced object literals are a feature in JavaScript introduced in ES6 (ECMAScript 2015) that 
 * makes it easier and more concise to define and manipulate objects. They provide several shorthand syntaxes 
 * and features for object literals, improving readability and reducing boilerplate code.
 * 
 */
const firstName = "Sumit";
const lastName = "Gorai"
const myAge = 22;

const user = {
    firstName,
    lastName,
    myAge,
    getFullName(){
        return `${this.firstName} ${this.lastName}`
    },
    greetings() {
        return `Hi , My name is ${this.getFullName()} and I am ${this.myAge} years old.` 
    }
}
console.log("User Object : ",user)
console.log("Full Name : ", user.getFullName())
console.log("Welcome message : ",user.greetings())


// --Task 9: Create an object with computed property names based on variables and log the object to the console. ✔✅
const value1 = "firstName"
const value2 = "lastName"
const value3 = "age"

const userDetails = {
    [value1] : "Sumit",
    [value2] : "Gorai",
    [value3] : 22,
}
console.log(userDetails)
