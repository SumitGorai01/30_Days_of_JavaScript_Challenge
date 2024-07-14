/** Day 2 : - operator */

/** 
 * Activity 1 : Arithmetic operator 
 * */

//Task 1: Wap to add two numbers and log the result to the console

let a = 4 , b = 6 
let c = a + b
console.log(`Addition =  ${c}`)

//Task 2: Wap to subtract two numbers and log the result to the console
let n1 = 4 , n2 = 6 
let n3 = n1 - n2
console.log(`Subtration = ${n3}`)

//Task 3: Wap to multiply two numbers and log the result to the console
let num1 = 4 , num2 = 6 
let num3 = num1 * num2
console.log(`Multiplication = ${num3}`)

//Task 4: Wap to divide two numbers and log the result to the console
let b1 = 4 , b2 = 6 
let b3 = b1 / b2
console.log(`Division = ${b3}`)

//Task 5: Wap to find the remainder when one number is devided by another and log the result to the console 
let c1 = 14 , c2 = 6 
let c3 = c1 % c2
console.log(`Remainder = ${c3}`)


/** 
 * Activity 2 : Assignment Operators 
 * */

//Task 6: use the += operator to add a number to a variable and log the result to the console
let sum = 25
sum += 15
console.log(`Addition using assignment operator = ${sum}`)


//Task 7 : Use the -= operator to subtract a number from a variable and log the result to the console
let sub = 10
sub -= 5
console.log(`Subtraction using assignment operator = ${sub}`)

/** 
 * Activity 3 : Comparison operator 
 * */

// Task 8 : Wap to compare two numbers using > and < and log the result to the console
let num4 = 10 , num5 = 5

if(num4 > num5 ){
    console.log(`${num4} is greater than ${num5}`)
}
else if(num4 < num5){
    console.log(`${num4} is less than ${num5}`)
}


// Task 9 : wap to compare two number using >= and <= and log the result to the console.
let num6 = 10 , num7 = 5

if(num6 >= num7 ){
    console.log(`${num6} is greater than or equal to ${num7}`)
}
else if(num6 <= num7){
    console.log(`${num6} is less than or equal to ${num7}`)
}

// Task 10 : wap to compare two number using == and === and log the result to the console.
let num8 = 10 ,num9 = "10"

isEqual = num8 == num9
isStrictEqual = num8 === num9

// console.log("Both are equal ==")
// console.log("Both are strictly equal ===")

if(num8 == num9 ){
    console.log(`${num8} is equal to ${num9}`)
}
else if(num8 === num9){
    console.log(`${num8} is strictly equal to ${num9}`)
}


/** 
 * Activity 4 : Logical Operators 
 * */

// Task 11 : wap that uses the && operator to combine two conditions and log the result to the console

let boyAge = 22
let girlAge = 19

if(girlAge >= 18 && boyAge >= 21){
    console.log("Both are eligible for Shadi")
}
else{
    console.log("Both are not eligible for shadi.")
}


// Task 12 : wap that uses  || operator to combine two conditions and log the result to the console

let x = 22
let y = 19
let z = 20

if(x >= y || y >= z){
    console.log(true)
}

// Task 14 : wap that uses ! operator to negate a conditions and log the result to the console

let p1 = 22
let p2 = 20


if(p1 != p2){
    console.log("Both are not equal")
}
else{
    console.log("Both are equal")
}

/**
 * Activity 5 : Ternary Operator
 */
//Task 14 : Wap a program that uses the  ternary operator to check if a number is positive or negative and log the result to the console.

let number = 6
checkByTernary = number >= 0 ? "Positive Number" : "Negative Number"

console.log(checkByTernary)