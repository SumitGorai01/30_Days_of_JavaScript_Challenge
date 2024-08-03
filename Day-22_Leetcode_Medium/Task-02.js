
/**
 * Activity 2: Longest Substring Without Repeating Characters
 * 
 * Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
 * 
 * Write a function that takes a string and returns the length of the longest substring without repeating characters.
 * Log the length for a few test cases, including edge cases.
 * 
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let count = new Array(256).fill(0);
    for(let i=0,j=0;i<s.length ; i++){
        count[s.charCodeAt(i)]++;
        while(count[s.charCodeAt(i)] > 1){
            count[s.charCodeAt(j++)]--;
        }
        ans = Math.max(ans , i-j+1);
    }
    return ans;
};

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb"));  // Output: 3 (substring: "abc")
console.log(lengthOfLongestSubstring("bbbbb"));  // Output: 1 (substring: "b")
console.log(lengthOfLongestSubstring("pwwkew"));  // Output: 3 (substring: "wke")

/**
 * LeetCode Link :-
 * 
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/1342696044/
 * 
 */