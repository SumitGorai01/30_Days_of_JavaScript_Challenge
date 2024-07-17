/**
 * Day 5 : Functions  ✔
 */

/**
 * Activity 1 : Function Declaration
 */

//--Task 1 : WAP to check if a number is even or odd and log the result to the console ✔

function checkOddEven(number) {
    if (number % 2 == 0) {
        console.log(`${number} is Even.`)
    }
    else {
        console.log(`${number} is Odd.`)
    }
}
console.log(4)
console.log(5)

//--Task 2 : WAP to calculate the square of a number and return the result ✔

function squareOfNumber(number) {
    return number * number;
}
const result = squareOfNumber(4)
console.log(`Square : ${result}`)


/**
 * Activity 2 : Function Expression
 */

//--Task 3 : Write a function expression to find the maximum of two numbers and log the result to the console. ✔

const MaximumNumber = function (num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is Maximum`)
    }
    else {
        console.log(`${num2} is Maximum`)
    }
}
MaximumNumber(3, 5)
MaximumNumber(13, 8)

//--Task 4 : Write a function expression to concatenate two string and return the result ✔

let StringConcatenate = function (str1, str2) {
    return str1 + str2;
}
console.log(StringConcatenate("Welcome to", " Chai Aur Code"))
console.log(StringConcatenate("Learn JavaScript from ", "Chai aur Code"))

/**
 * Arrow Functions 
 */

//--Task 5 : write an arrow function to calculate the sum of two numbers and return the result ✔

const sum = (num1, num2) => {
    // num1+num2
    return num1 + num2;
}
const res = sum(3, 5)
console.log(`Sum = ${res}`)
// console.log("Sum =",sum(4,5))


//--Task 6 ; write an arrow function to check if a string contains specific character and return a boolean value. ✔

const containsSpecificChar = (str, char) => {
    if (str.includes(char)) {
        return true;
    }
    else {
        return false;
    }
}
const ans = containsSpecificChar("Hello@", '@')
console.log(`Special Character contains : ${ans}`)

/**
 * Function Parameters and Default Values
 */

//--Task 7 : write a function that takes two parameters and returns their product. Provide a default value for the second parameter. ✔
function multiplication(num1, num2 = 10) {
    return num1 * num2;
}
console.log(`Multiplication is ${multiplication(5)}`)
console.log(`Multiplication is ${multiplication(5, 6)}`)

//--Task 8 : Write a function that takes a person's name and age and return a greeting message . Provide default value for age. ✔

function user(name, age = 20) {
    return `Welcome ${name} to Chai Aur Code and Your age is ${age}`
}
const userMessage = user("Sumit", 21)
console.log(userMessage)
const userMessage1 = user("Amit")
console.log(userMessage1)

/**
 * Activity 5 : Higher-Order Functions
 */

//--Task 9 : Write a higher order function that takes a function and a number , and calls the function that many times. ✔

function recursiveFunc(func, num) {
    for (let i = 0; i < num; i++) {
        func()
    }
}
function greetings() {
    console.log("Welcome Sumit to Chai Aur Code.")
}
recursiveFunc(greetings, 4)

//--Task 10 : Write a higher order function that takes two functions and value , applies the first function to the value , and then applies the second function to the result. ✔

const applyFunctions = (func1, func2, value) => func2(func1(value));

// Example functions
const double = x => x * 2;
const square = x => x * x;

// const initialValue = 5;
console.log(double(4))
console.log(square(double(4)))

const result1 = applyFunctions(double, square, 4);

console.log(`${result1}`);

