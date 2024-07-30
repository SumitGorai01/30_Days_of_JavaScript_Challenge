/**
 * Day 18 :- Algorithms
 */

/**
 * Activity 1: Sorting Algorithms 
 */

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function bubbleSort(arr) {
    let n = arr.length - 1;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Bubble Sort : ", arr)
}
bubbleSort([10, 25, 1, 28, 12, 9])

// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function selectionSort(arr) {
    let n = arr.length - 1;
    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    console.log("Selection Sort : ", arr);
}

selectionSort([45, 21, 23, 10, 5, 3, 52]);

// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [74, 54, 25, 42, 22, 12, 80];
const sortedArray = quickSort(array);
console.log("Quick Sorted Array:", sortedArray);

/**
 * Activity 2: Searching Algorithms
 */

// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            console.log(`Items ${key} found at index ${i}`);
            return i;
        }
    }
    console.log(`Item is not found in the array.`)
    return -1;
}
const arr = [54, 12, 5, 65, 87, 25, 42];
const key = 65;
linearSearch(arr, key);

// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log(`Item ${target} found at location : ${mid}`);
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(`Item not found in the array.`);
    return -1;
}
const arr1 = [12, 22, 25, 42, 54, 74, 80];
const target = 42;
binarySearch(arr1, target);


/**
 * Activity 3: String Algorithms
 */

// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function countOccurrencceOfChar(str) {
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    console.log("Character counts : ", charCount);
    return charCount;
}
const string = "Chai aur code";
countOccurrencceOfChar(string);

// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function lengthOfLongestSubstring(str) {
    let maxLength = 0;
    let currentSubstring = "";

    for (let char of str) {
        if (currentSubstring.includes(char)) {
            currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1);
        }
        currentSubstring += char;
        maxLength = Math.max(maxLength, currentSubstring.length);
    }
    console.log(`Length of the longest substring without repeating characters: ${maxLength}`);
    return maxLength;
}

lengthOfLongestSubstring("abcafbcbb");

/**
 * Activity 4: Array Algorithms
 */

// Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k) {
    let n = arr.length;
    k = k % n;

    if (k === 0) {
        console.log(`Rotated array : [${arr.join(',')}]`);
        return arr;
    }
    let rotateArray = arr.slice(n - k).concat(arr.slice(0, n - k));

    console.log(`Rotated array : [${rotateArray.join(', ')}]`);

    return rotateArray;
}
rotateArray([1, 2, 3, 4, 5, 6, 7], 3);

// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array
function mergeSortedArray(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr[i] < arr2[i]) {
            mergedArray.push(arr[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        mergedArray.push(arr[i]);
        i++;
    }
    while (j < arr2.length) {
        mergedArray.push(arr[j]);
        i++;
    }
    console.log("Merged Sorted Array : ", mergedArray);
}
mergeSortedArray([1, 2, 3, 4, 5], [6, 7, 8, 9])


/**
 * Activity 5: Dynamic Programming (Optional)
 */

// Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers.
function fibonacciByDP(n) {
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    console.log("Fibonacci Sequence : ", fibo);
    return fibo[n];
}
fibonacciByDP(8)

// Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.
function knapsack(weights, values, capacity) {
    let n = weights.length;
    let dp = Array(n + 1)
        .fill()
        .map(() => Array(capacity + 1)
            .fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(
                    dp[i - 1][w],
                    dp[i - 1][w - weights[i - 1]] + values[i - 1]
                );
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    console.log("Maximum value in Knapsack:", dp[n][capacity]);
    return dp[n][capacity];
}
knapsack([1, 3, 4, 5], [1, 4, 5, 7], 7);
