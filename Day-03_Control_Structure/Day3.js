/**
 * Day 3 :- Control Structures
 */

/**
 * Activity 1 : if-else Statements
 */

//Task 1 : WAP to check if a number is positive , negative or zero,and log the result to the console.

let a = 5
if(a > 0){
    console.log(`${a} is positive number.`)
}
else if(a < 0){
    console.log(`${a} is negative number`)
}
else{
    console.log(`${a} is Zero.`)
}

//Task 2 : wap to check if a person is eligible to vote (age >= 18 )and log the result

let age = 24
if(age >= 18){
    console.log("Person is eligible for vote.")
}
else{
    console.log("Not Eligible for vote.")
}


/**
 * Activity 2 : Nested if-else statements
 */

// Task 3 : wap to find the largest of three numbers using nested if-else statements

let b = 4 , c = 6 , d = 5
if(b > c && b > d){
    console.log(`${b} is greatest number`)
}
else {
    if(c > d && c > b){
        console.log(`${c} is greatest number.`)
    }
    else{
        console.log(`${d} is greatest number.`)
    }
}

/**
 * Activity 3 : Switch case
 */

// Task 4 : wap that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console

let day = 5
switch(day){
    case 1 :
        console.log("Monday")
        break;
    case 2 :
        console.log("Tuesday")
        break
    case 3 :
        console.log("Wednesday")
        break
    case 4 :
        console.log("Thursday")
        break
    case 5 :
        console.log("Friday")
        break
    case 6 :
        console.log("Saturday")
        break
    case 7 :
        console.log("Sunday")
        break
    default :
    console.log("Please enter number between 1 - 7")
}

// Task 5 : wap that uses a switch case to assign a grade('A','B','C','D','E','F') based on a score and log the grade to the console

let marks = 75

switch(true){
    case (marks >= 90 && marks <=100 ) :
        console.log("A Grade")
        break;
    case (marks < 90 && marks >= 80) :
        console.log("B Grade")
        break
    case (marks < 80 && marks >= 70 ):
        console.log("C Grade")
        break
    case (marks < 70 && marks >= 60 ):
        console.log("D Grade")
        break
    case (marks < 60 && marks >= 50 ):
        console.log("E Grade")
        break
    case (marks < 50 ):
        console.log("F Grade")
        break
    default :
        console.log("Enter a Valid marks")
}


/**
 * Activity 4 : Conditional Ternary operator
 */

//Task 6 : wap that uses the ternary operator to check if the number is even or odd and log the result to the console

let num = 5

checkNum = (num % 2 == 0) ? `${num} is even` : `${num} is odd`;

console.log(checkNum)

/**
 * Activity 5 : Combining Conditions
 */

//Task 7 : wap to check if a year is leap year using multiple conditions(divisible by 4 , but not 100 also divisible by 400) and log the result to the console

let year = 1900

if(((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)){
    console.log(`${year} is a leap year.`)
}
else{
    console.log(`${year} is not leap year.`)
}