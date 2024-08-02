/**
 * Activity 2: Reverse Integer
 * 
 * Task 2: Solve the "Reverse Integer problem on LeetCode.
 * 
 * Write a function that takes an integer and returns it with its digits reversed.
 * Handle edge cases like negative numbers and numbers ending in zero.
 * Log the reversed integers for a few test cases.
 * 
 */

function reversedInteger(x){
    const sign = x < 0 ? -1 : 1;
    const reversedStr = Math.abs(x).toString().split('').reverse().join('');
    const reversedNum = sign * parseInt(reversedStr);

    if (reversedNum < -2147483648 || reversedNum > 2147483647) {
        return 0;
    }

    return reversedNum;
}

console.log(reversedInteger(123));    // Output: 321
console.log(reversedInteger(-123));   // Output: -321
console.log(reversedInteger(120));    // Output: 21
console.log(reversedInteger(0));      // Output: 0
console.log(reversedInteger(1534236469)); // Output: 0 (overflow case)