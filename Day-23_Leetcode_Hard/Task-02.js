/**
 * Activity 2: Merge k Sorted Lists
 * 
 * Task 2: Solve the "Merge k Sorted Lists" problem on LeetCode.
 * 
 * Write a function that takes an array of ik linked lists, each linked list is sorted in ascending order, 
 * and merges all the linked lists into one sorted linked list.
 * Create a few test cases with linked lists and log the merged list.
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var mergeKLists = function(lists) {
    result = [];

    lists.forEach( li =>{
        while(li){
            result.push(li.val);
            li = li.next;
        }
    })

    result.sort((a,b)=> b-a);

    if(result.length < 1){
        return null;
    }

    let res = new ListNode(result[0],undefined);

    for(let i=1 ; i<result.length ; i++){
        res = new ListNode(result[i] , res);
    }

return res;
};


function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function printList(head) {
    let current = head;
    let result = [];
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    console.log(result.join(" -> "));
}

// Test Case 1: Multiple non-empty lists
let list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let list3 = new ListNode(2, new ListNode(6));

let mergedList1 = mergeKLists([list1, list2, list3]);
printList(mergedList1); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6

// Test Case 2: One empty list and one non-empty list
let list4 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList2 = mergeKLists([list4, null]);
printList(mergedList2); // Output: 1 -> 3 -> 4

// Test Case 3: All lists are empty
let mergedList3 = mergeKLists([null, null, null]);
printList(mergedList3); // Output: (no output, as the list is empty)

/**
 * 
 * Leet Code Link:-
 * 
 * https://leetcode.com/problems/merge-k-sorted-lists/submissions/1344331587/
 * 
 * 
 */