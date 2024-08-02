/**
 * Activity 5: Valid Parentheses
 * 
 * Task 5: Solve the 'Valid Parentheses problem on LeetCode.
 * 
 * Write a function that takes a string containing just the characters(), [], '' and T', and determines 
 * if the input string is valid.A string is valid if open brackets are closed in the correct order.
 * Log the result for a few test cases.
 * 
 */

function isValid(str) {
    const stack = [];
    const map = {
      "(": ")",
      "{": "}",
      "[": "]",
    };
  
    for (let char of str) {
      if (map[char]) {
        stack.push(map[char]);
      } else {
        if (stack.pop() !== char) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Test cases
  console.log(isValid("(]")); // Output: false
  console.log(isValid("()")); // Output: true
  console.log(isValid("{[]}")); // Output: true
  console.log(isValid("()[]{}")); // Output: true
  console.log(isValid("([)]")); // Output: false