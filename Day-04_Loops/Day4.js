/**
 * Day 4 : Loops
 */

/**
 * Activity 1 : For Loop
 */

//Task 1 : WAP to print numbers from 1 ot 10 using for loop
console.log("Numbers from 1 ot 10 using for loop :")
for (i = 1; i <= 10; i++) {
    console.log(i)
}

//Task 2 : WAP to pring the multiplication table of five using for loop

let num = 5
console.log(`Table of ${num} : `)
for (i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
}

/**
 * Activity 2 : While loop
 */

// Task 3 : WAP to calculate the sum of numbers from 1 to 10 using while loop


let sum = 0, n = 1
while (n <= 10) {
    sum = sum + n;
    n++;
}
console.log(`Sum of numbers from 1 to 10 using while loop : ${sum}`)

// Task 4 : WAP to print numbers from 10 to 1 using a while loop

console.log("Numbers from 10 to 1 using a while loop : ")
let a = 10
while (a > 0) {
    console.log(a)
    a--
}


/**
 * Activity 3 : Do..While Loop
 */

// Task 5 : WAP to print number from 1 to 5 using do-while loop

console.log("Number from 1 to 5 using do-while loop : ")
let b = 1
do {
    console.log(b)
    b++
} while (b <= 5)

// Task 5 : WAP to calculate the factorial of a number using do-while loop

let c = 6
let fact = 1
let j = 1
do {
    fact = fact * j
    j++
} while (j <= c);

console.log(`Factorial of ${c} = ${fact}`)

/**
 * Activity 4 : Nested loops
 */

/* Task 7 : WAP to print a pattern using for loop

*
* *
* * *
* * * *
* * * * *

*/
let row, col
let str = ""
for (row = 0; row < 5; row++) {
    for (col = 0; col <= row; col++) {
        str += "* ";
    }
    str += "\n";
}
console.log(str)

/**
 * Activity 5 : Loop Control Statements
 */

// Task 8 : WAP to print numbers from 1 to 10 , but skip the number 5 using the continue statement
console.log("Numbers from 1 to 10 , but skip the number 5 using the continue statement : ")
for(let j=1 ;j<=10 ;j++){
    if(j == 5){
        continue;
    }
    console.log(j)
}
// Task 9 : WAP to print numbers from 1 to 10 , but stop the loop when the number is 7 using break statement
console.log("Numbers from 1 to 10 , but stop the loop when the number is 7 using break statement : ")
for(let j=1 ;j<=10 ;j++){
    if(j == 7){
        break;
    }
    console.log(j)
}

