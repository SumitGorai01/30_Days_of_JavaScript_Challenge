/**
 * Day - 15 :- Closures
 */

/**
 * Activity 1: Understanding Closures
 */

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction(){
    let outerVariable = "I am from outer function";

    function innerFunction(){
        return outerVariable;
    }
    return innerFunction;
}
const inner = outerFunction();
console.log(inner());

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function privateCounter(){
    let counter = 0;

    return {
        increment : function(){
            counter++;
        },
        getValue : function(){
            return counter;
        }
    };
}
const myCounter = privateCounter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(`Current Value : ${myCounter.getValue()}`);

/**
 * Activity 2: Practical Closures
 */

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function idGenerator(){
    let lastId = 0;

    return function(){
        lastId++;
        return lastId;
    }
}

const generateId = idGenerator();
console.log(generateId());
console.log(generateId());

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function greetTheUser(name , course){
    return function(){
        console.log(`Hello ${name} , Wlcome to ${course} world.`)
    }
}
const greetUser = greetTheUser("Sumit","JavaScript");
greetUser();


/**
 * Activity 3: Closures in Loops
 */

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
function arrayFunction(){
    let arrayOfFunction = [];

    for (let i=0;i<8;i++) {
        arrayOfFunction.push(
            (function (index){
                return function(){
                    console.log(index)
                };
            })(i)
        );
    }
    return arrayOfFunction;
}

const ArrayOfFunction = arrayFunction();
ArrayOfFunction[0]();
ArrayOfFunction[1]();
ArrayOfFunction[2]();
ArrayOfFunction[3]();
ArrayOfFunction[4]();
ArrayOfFunction[5]();
ArrayOfFunction[6]();
ArrayOfFunction[7]();

/**
 * Activity 4: Module Pattern
 */

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.
const itemManager = (function(){
    let items = [];

    return {
        addItem : function(item){
            const index = items.push(item);
        },
        removeItem : function(item){
            const index = items.indexOf(item);
            if(index > -1){
                items.splice(index,1);
            }
        },
        listItem : function (){
            return items;
        }
    };
})();

itemManager.addItem("Laptop");
itemManager.addItem("Desktop");
itemManager.addItem("Mobile");
console.log(itemManager.listItem());

itemManager.removeItem("Desktop");
console.log(itemManager.listItem());

/**
 * Activity 5: Memoization
 */
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(func){
    const  cache = {};

    return function (...args){
        const key = JSON.stringify(args);
        if(cache[key]){
            return cache[key];
        }else{
            const result = func(...args);
            cache[key]=result;
            return result;
        }
    };
}

const mul = (a,b) => a*b;
const  memoizeMultiply = memoize(mul);
console.log(memoizeMultiply(2,3));
console.log(memoizeMultiply(2,3));


// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function memoizeFact (){
    const cache = {};

    return function factorial(n){
        if(n in cache){
            return cache[n];
        }else{
            if(n===0){
                cache[n] = 1;
            }else{
                cache[n] = n* factorial(n-1);
            }
            return cache[n];
        }
    };
}

const factorial = memoizeFact();
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));