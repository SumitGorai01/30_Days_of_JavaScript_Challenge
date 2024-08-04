/**
 * Activity 5: Word Ladder
 * 
 * Task 5: Solve the "Word Ladder" problem on 1 LeetCode.
 * 
 * Write a function that takes a begin word, an end word, and a dictionary of words,
 * and finds the length of the shortest transformation sequence from the begin word to 
 * the end word, such that only one letter can be changed at a time and each transformed
 * ward must exist in the word list.
 * Log the length of the shortest transformation sequence for a few test cases.

 * 
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList);

    if(!wordSet.has(endWord))
        return 0;
    
    let queue = [[beginWord ,1]];// endWord , wordList]];

    while(queue.length > 0){
        let [word , length] = queue.shift();

        if(word === endWord)
            return length;
        
        for(let i=0 ; i<word.length ;i++){
            for(let charCode=97 ; charCode<=122 ; charCode++){
                let newWord = word.slice(0 , i) + String.fromCharCode(charCode)+word.slice(i+1);

                if(wordSet.has(newWord)){
                    queue.push([newWord , length + 1]);
                    wordSet.delete(newWord);
                }
            }
        }
    }
    return 0;
};

console.log(
    ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
  ); // 5
  console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
  
/**
 * Leet Code Link :-
 * 
 * https://leetcode.com/problems/word-ladder/submissions/1344356754/
 */