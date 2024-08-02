/**
 * Activity 3: Palindrome Number
 * 
 * Task 3: Solve the "Palindrome Number" problem on LeetCode.
 * 
 * Write a function that takes an integer and returns true if it i t is a palindrome, and false otherwise.
 * Log the result for a few test cases, including edge cases like negative numbers.
 * 
 */

function isPalindrome(x){
    if(x < 0){
        return false;
    }
    const str = x.toString();

    const reversedStr = str.split('').reverse().join('');

    return str === reversedStr;
}
console.log(isPalindrome(121));      // Output: true
console.log(isPalindrome(-121));     // Output: false
console.log(isPalindrome(10));       // Output: false
console.log(isPalindrome(12321));    // Output: true
console.log(isPalindrome(0));        // Output: true


/*

Explanation:
Negative Check: If the number is negative, immediately return false because negative numbers cannot be palindromes.
String Conversion: Convert the integer to a string using toString().
Reverse String: Reverse the string using split('') to convert it into an array of characters, reverse() to reverse the array, and join('') to join the array back into a string.
Comparison: Compare the original string with the reversed string. If they are the same, the number is a palindrome; otherwise, it is not.

*/