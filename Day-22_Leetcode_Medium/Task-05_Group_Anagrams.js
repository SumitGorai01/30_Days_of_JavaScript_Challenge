/**
 * Activity 5: Group Anagrams
 * 
 * Task 5: Solve the "Group Anagrams problem on LeetCode.
 * 
 * Write a function that takes an array of strings and groups anagrams together.
 * Log the grouped anagrams for a few test cases.
 * 
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};

    for (let str of strs) {
        let sortedStr = str.split('').sort().join(''); // Sort the characters of the string
        if (!map[sortedStr]) {
            map[sortedStr] = []; // Initialize the array if it doesn't exist
        }
        map[sortedStr].push(str); // Group anagrams together
    }
    return Object.values(map); // Return the grouped anagrams
};

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]

console.log(groupAnagrams(["abc", "bca", "cab", "xyz", "zyx", "yxz"]));
// Output: [["abc", "bca", "cab"], ["xyz", "zyx", "yxz"]]
