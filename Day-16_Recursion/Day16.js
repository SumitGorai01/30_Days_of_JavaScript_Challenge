/**
 * Activity 1: Basic Recursion
 */

// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.
function factorial(number) {
    if (number <= 1)
        return 1;
    return number * factorial(number - 1);
}
console.log("Factorial of 5 is ", factorial(5));
console.log("Factorial of 6 is ", factorial(6));

// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.
function fibonacci(num) {
    if (num === 1)
        return 1;
    if (num === 2)
        return 1;

    return fibonacci(num - 1) + fibonacci(num - 2)
}
console.log("3rd Fibonacci number is : ", fibonacci(3))
console.log("4th Fibonacci number is : ", fibonacci(4))
console.log("5th Fibonacci number is : ", fibonacci(5))

/**
 * Activity 2: Recursion with Arrays
 */

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases
function sumArray(arr, i) {
    if (i == arr.length)
        return 0;
    return arr[i] + sumArray(arr, i + 1);
}

let arr1 = [1, 2, 3, 4];
let arr2 = [6, 7, 8, 9];
console.log(sumArray(arr1, 0));
console.log(sumArray(arr2, 0));


// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.
function findMax(arr, n) {
    if (n === 1) {
        return arr[0];
    }

    return Math.max(arr[n - 1], findMax(arr, n - 1));
}

const testArr1 = [1, 5, 3, 9, 2];
const testArr2 = [10, 20, 30, 40, 50];
const testArr3 = [-1, -2, -3, -4, -5];
const testArr4 = [100];
const testArr5 = [3, 3, 3, 3, 3];

console.log(findMax(testArr1, testArr1.length)); // Output: 9
console.log(findMax(testArr2, testArr2.length)); // Output: 50
console.log(findMax(testArr3, testArr3.length)); // Output: -1
console.log(findMax(testArr4, testArr4.length)); // Output: 100
console.log(findMax(testArr5, testArr5.length)); // Output: 3


/**
 * Activity 3: String Manipulation with Recursion
 */

// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.
function reverseString(str) {
    if (str === "")
        return "";
    return reverseString(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("JavaScript"));
console.log(reverseString("Challenge"));


// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }
    if (str[0] !== str[str.length - 1]) {
        return false;
    }
    return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("React"));
console.log(isPalindrome("mom"));
console.log(isPalindrome("JavaScript"));

/**
 * Activity 4: Recursive Search
 */


// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.
function binarySearch(arr, target, left, right) {
    if (left > right) {
        return -1;
    }

    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    if (arr[mid] > target) {
        return binarySearch(arr, target, left, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, right);
    }
}

function findIndex(arr, target) {
    return binarySearch(arr, target, 0, arr.length - 1);
}

const testArray1 = [1, 3, 5, 7, 9, 11];
const testArray2 = [2, 4, 6, 8, 10, 12];
const testArray3 = [10, 20, 30, 40, 50, 60];

console.log(findIndex(testArray1, 5)); // Output: 2
console.log(findIndex(testArray2, 8)); // Output: 3
console.log(findIndex(testArray3, 25)); // Output: -1 (not found)

// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
function countOccurrences(arr, i, num) {
    if (i === arr.length) return 0;
    let restCount = countOccurrences(arr, i + 1, num);
    return arr[i] === num ? restCount + 1 : restCount;
  }
  
  let countArray = [21, 12, 22, 4, 22, 1, 4, 3, 4, 3, 4]; 
  console.log("Count of 21:", countOccurrences(countArray, 0, 21));
  console.log("Count of 22:", countOccurrences(countArray, 0, 22));
  console.log("Count of 4:", countOccurrences(countArray, 0, 4));

/**
 * Activity 5: Tree Traversal (Optional)
 */

// Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.
class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
function inOrderTraversal(node) {
    if (node === null) {
        return;
    }

    inOrderTraversal(node.left);

    console.log(node.value);

    inOrderTraversal(node.right);
}

const tree1 = new TreeNode(1, 
                new TreeNode(2, 
                    new TreeNode(4), 
                    new TreeNode(5)
                ), 
                new TreeNode(3)
            );

const tree2 = new TreeNode(10, 
                new TreeNode(5, 
                    new TreeNode(3), 
                    new TreeNode(7)
                ), 
                new TreeNode(15, 
                    null, 
                    new TreeNode(18)
                )
            );

console.log("In-order traversal of tree1:");
inOrderTraversal(tree1); // Output: 4, 2, 5, 1, 3

console.log("In-order traversal of tree2:");
inOrderTraversal(tree2); // Output: 3, 5, 7, 10, 15, 18



