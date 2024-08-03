
/**
 * Activity 3: Container With Most Water
 * 
 * Task 3: Solve the "Container With Most Water" problem on LeetCode.
 * 
 * Write a function that takes an array of non-negative integers where each integer represents the height of a line 
 * drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds 
 * the most water.
 * Log the maximum amount of water for a few test cases.
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while(left < right){
        let width = right - left;

        let currentArea = width * Math.min(height[left] , height[right]);
        maxArea = Math.max(maxArea ,currentArea);

        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
};

// Test cases
console.log(maxArea([1,8,6,2,5,4,8,3,7]));  // Output: 49
console.log(maxArea([1,1]));  // Output: 1
console.log(maxArea([4,3,2,1,4]));  // Output: 16

/**
 * LeetCode Link :-
 * 
 * https://leetcode.com/problems/container-with-most-water/submissions/1342707937/
 */