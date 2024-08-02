
/**
 * Activity 1: Two Sum
 * 
 * Task 1: Solve the "Two Sum" problem on LeetCode.
 * 
 * Write a function that takes an array of numbers and a target number, and returns the indices 
 * of the two numbers that add up to the target.Log the indices for a few test cases.
 * 
 */


function twoSum(nums , target){
    const numToIndex = {};
    for(let i = 0 ; i<nums.length;i++){
        const complement = target - nums[i];
        if(complement in numToIndex){
            return [numToIndex[complement],i];
        }
        numToIndex[nums[i]] = i;
    }
    return [];
}
console.log(twoSum([2,7,11,15],9));
console.log(twoSum([3,4,5],9));
console.log(twoSum([2,4,6,3,9],9));

/*
Explanation :-

### Problem Statement:
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to the target. 

### Detailed Explanation:
- You are provided with an array of integers, `nums`.
- You need to find two distinct numbers in the array that sum up to a given integer, `target`.
- The function should return the indices of these two numbers.
- You can assume that each input would have exactly one solution, and you cannot use the same element twice.

### Example:
Suppose `nums = [2, 7, 11, 15]` and `target = 9`.
- The numbers 2 and 7 add up to 9.
- The indices of 2 and 7 in the array are 0 and 1, respectively.
- Therefore, the function should return `[0, 1]`.

### Constraints:
- There will always be exactly one solution.
- You cannot use the same element twice.

### Approach:
1. **Brute Force:** Check all possible pairs of numbers in the array to see if they add up to the target. This approach has a time complexity of O(n^2).
2. **Hash Map:** Use a hash map (dictionary) to store the numbers and their indices as you iterate through the array. This approach allows you to find the solution in linear time, O(n).


### Explanation of the Code:
- We create an empty object `numToIndex` to store the numbers we have seen so far and their indices.
- We loop through the array using a `for` loop.
- For each number, we calculate its complement (the number that, when added to the current number, equals the target).
- If the complement is already in `numToIndex`, we return the indices of the complement and the current number.
- If the complement is not in `numToIndex`, we add the current number and its index to `numToIndex`.
- If no solution is found by the end of the loop (though the problem guarantees there will be one), we return an empty array.

*/