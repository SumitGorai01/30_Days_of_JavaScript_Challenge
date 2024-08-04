
/**
 * Activity 3: Trapping Rain Water
 * 
 * Task 3: Solve the "Trapping Rain Water" problem on LeetCode.
 * 
 * Write a function that takes an array of non-negative integers representing an elevation map 
 * where the width of each bar is 1, and computes how much water it can trap after raining.
 * Log the amount of trapped water for a few test cases.
 * 
 */

/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    let i = 0;
    let left = height[0];
    let sum = 0;
    let j = height.length - 1;
    let right = height[j];

    while(i < j){
        if(left <= right){
            sum += left - height[i];
            i++;
            left = Math.max(left , height[i]);
        }else{
            sum += right - height[j];
            j--;
            right = Math.max(right , height[j])
        }
    }
    return sum;
};
// Test Case 1: Basic case with rainwater trapped
let height1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height1)); // Output: 6

// Test Case 2: No rainwater trapped (all bars of the same height)
let height2 = [3, 3, 3, 3];
console.log(trap(height2)); // Output: 0


/**
 * Leet Code Link :-
 * 
 * https://leetcode.com/problems/trapping-rain-water/submissions/1344342242/
 */