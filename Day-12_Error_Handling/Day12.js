/**
 * Day 12 - Error Handling
 */

/**
 * Activity 1: Basic Error Handling with Try-Catch
 */

// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
    throw new Error("The Error is throws intentionally.")
}
try {
    throwError();
} catch (error) {
    console.log(`Some Error Occured : ${error.message}`)
}

// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function isDivideByZero(numerator, denominator) {
    if (denominator == 0) {
        throw new Error("Can't Divided By Zero.");
    }
    return numerator / denominator;
}

try {
    console.log(isDivideByZero(5, 0))
} catch (error) {
    console.log(`Error : ${error.message}`)
}

/**
 * Activity 2: Finally Block
 */

// Task 3: Write a script that includes a try-catch block and a finally block, Log messages in the try, catch, and finally blocks to observe the execution flow.
try {
    console.log("Try block executed successfully.");
    throw new Error("Some error occured in try block.")
} catch (error) {
    console.log(error.message, " is handled by catch block.")
} finally {
    console.log("The finally block executed successfully.")
}


/**
 * Activity 3: Custom Error Objects
 */

// Task 4: Create a custom error class that extends the built-in Error class, Throw an instance of this custom error in a function and handle it using a try-catch block
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "Custom Error";
    }
}
function throwCustomError() {
    throw new CustomError("This is a custom error!")
}
try {
    throwCustomError();
} catch (error) {
    console.log(`${error.name} : ${error.message}`)
}

// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
class validationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError"
    }
}
function validateUserInput(userInput) {
    if (userInput == null || !userInput) {
        throw new Error("Input can't be empty or null.");
    }
    return "Valid input";
}
try {
    console.log(validateUserInput(""));
} catch (error) {
    console.log(`${error.name} : ${error.message}`);
}

/**
 * Activity 4: Error Handling in Promises
 */

// Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    setTimeout(() => {
        if (randomNumber > 0.5) {
            resolve("The promise was resolve successfully.")
        } else {
            reject("Promise was rejected.")
        }
    })
})
randomPromise.then((message) => console.log(message))
    .catch((error) => console.error("Promise rejected : ", error))

// Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
async function handleRandomPromise() {
    try {
        const message = await randomPromise;
        console.log(message);
    } catch (error) {
        console.error("Error : ", error);
    }
}
handleRandomPromise();

/**
 * Activity 5: Graceful Error Handling in Fetch
 */

// Task 8: Use the fetch API to request data from an invalid URL and handle the error using catch() Log an appropriate error message to the console.
function fetchUrl() {
    fetch('https://invalidurl.javascript.com/user')
        .then((response) => {
            if (!response.ok) {
                throw new Error("Url is not respnded");
            }
            return response.json();
        })
        .then((data) => {
            console.log(`Data received : ${data}`)
        })
        .catch((error) => {
            console.error(`Fetch error : ${error}`);
        })
}
fetchUrl()

// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchData() {
    try {
        const response = await fetch("https://invalidurl.com/products")
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error("Error while fetching data : ", error);
    }
}
fetchData();