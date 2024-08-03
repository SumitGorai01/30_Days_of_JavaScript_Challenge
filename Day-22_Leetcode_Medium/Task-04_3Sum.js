/**
 * Activity 4: 3Sum
 * 
 * Task 4: Solve the "3Sum" problem on LeetCode.
 * 
 * Write a function that takes an array of integers and finds all
 * unique triplets in  the array which give the sum of  zero.
 * Log the triplets for a few test cases, including edge cases.
 * 
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let result = [];
    nums.sort((a,b) => a-b);

    for(let i=0; i<nums.length ; i++){
        // let left = i+1;
        if(i > 0 && nums[i] === nums[i-1]){
            continue;
        }
        let left = i+1;
        let right = nums.length - 1;

        while(left < right){
            let total = nums[i] + nums[left] + nums[right];

            if(total > 0){
                right--;
            }
            else if(total < 0){
                left++;
            }
            else{
                result.push([nums[i] , nums[left], nums[right]]);
                left++;
                while(nums[left] === nums[left - 1] && left < right){
                    left++;
                }
            }; 
        }
    }
    return result;
};

// Test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4]));  // Output: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0]));  // Output: []
console.log(threeSum([0, 0, 0]));  // Output: [[0, 0, 0]]

/**
 * 
 * LeetCode Link :-
 * 
 * https://leetcode.com/problems/3sum/submissions/1342742343/
 */