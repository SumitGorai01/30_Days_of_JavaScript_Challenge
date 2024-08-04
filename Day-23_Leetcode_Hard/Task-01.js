/**
 * Activity 1: Median of Two Sorted Arrays
 * 
 * Task 1: Solve the "Median of Two Sorted Arrays" problem on LeetCode.
 * 
 * Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
 * Log the median for a few test cases, including edge cases.
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged =[];
    let i=0;
    let j=0;

    while(i < nums1.length && j < nums2.length){
        if(nums1[i]<nums2[j]){
            merged.push(nums1[i++]);
        }else{
            merged.push(nums2[j++]);
        }
    }

    while(i < nums1.length)
        merged.push(nums1[i++]);

    while(j < nums2.length)
        merged.push(nums2[j++]);

    let length = merged.length;
    if(length % 2 === 0){
        return (merged[Math.floor(length / 2) - 1] + merged[Math.floor(length / 2)]) / 2;
    }else{
        return merged[Math.floor(length/2)];
    }

};

console.log(findMedianSortedArrays([4, 3], [4, 5])); // 3.5
console.log(findMedianSortedArrays([1, 2], [3])); // 2
console.log(findMedianSortedArrays([], [2])); // 2
console.log(findMedianSortedArrays([8], [])); // 8

/**
 * Leet Code Link :-
 * https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/1344214750/
 */
