/**
 *  Day-11 : Promises and Async/Await 
 */

/**
 * Activity 1: Understanding Promises
 */

// Task 1 : Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promiseResolve = new Promise((resolve) => {
    setTimeout(() => {
        resolve("This Promise is logged after 2 second");
    }, 2000);
});
promiseResolve.then((message) => {
    console.log(message);
})

// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using `.catch()`.
const promiseReject = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("This Promise will be rejected after two second"));
    }, 2000);
});
promiseReject.catch((error) => {
    console.error(error.message);
});


/**
 *  Activity 2: Chaining Promises
 */

// Task 3 : Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
const fetchData = (data, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Data fetched from ${data}`);
        }, delay);
    });
};
fetchData('server1', 1000)
    .then((data) => {
        console.log(data);
        return fetchData('server2', 2000);
    })
    .then((data) => {
        console.log(data);
        return fetchData('server3', 3000);
    })
    .then((data) => {
        console.log(data);
        console.log("All data fetched in sequence.")
    })

/**
 * Activity 3: Using Async/Await
 */

// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const asyncFunc = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Display the resolve value")
        }, 2000);
    });

    const logResolveValue = await promise;
    console.log(logResolveValue)
};
asyncFunc();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.
const handleRejectedPromise = async () => {
    const promise = new Promise((_, reject) => {
        setTimeout(() => {
            reject("Ohh ! Some error message from the rejected promise.")
        }, 2000)
    });

    try {
        const resolvedValue = await promise;
        console.log(resolvedValue);
    } catch (error) {
        console.error("Something went wrong", error);
    }
};
handleRejectedPromise();


/**
 * Activity 4: Fetching Data from an API
 */

// Task 6: Use the `fetch` API to get data from a public API and log the response data to the console using promises.
const apiUrl = "https://jsonplaceholder.typicode.com/users"

fetch(apiUrl)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(`Some error occured : ${error}`)
    });

// Task 7: Use the `fetch` API to get data from a public API and log the response data to the console using async/await.
const fetchDataUsingAsnyc = async () => {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Something wrong : ", error);
    }
};
fetchDataUsingAsnyc();


/**
 * Activity 5: Concurrent Promises
 */

// Task 8: Use `Promise.all` to wait for multiple promises to resolve and then log all their values.
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("First Promise resolved.");
    }, 1000);
});
const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Second Promise resolved.");
    }, 2000);
});
const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Third Promise resolved.");
    }, 3000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});

// Task 9: Use `Promise.race` to log the value of the first promise that resolves among multiple promises.
const promise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Fourth Promise resolved.");
    }, 1000);
});
const promise5 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Fifth Promise resolved.");
    }, 2000);
});
const promise6 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Sixth Promise resolved.");
    }, 3000);
});

Promise.race([promise4, promise5, promise6]).then((values) => {
    console.log(values);
});