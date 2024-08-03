/**
 * Activity 1: Add Two Numbers
 * 
 * Task 1: Solve the "Add Two Numbers" problem on LeetCode.
 * 
 * Write a function that takes two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each node contains a single digit.
 * Add the two numbers and return the sum as a linked list.
 * Create a few test cases with linked lists and log the sum as a linked list.
 * 
 */


// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;
    
    while (l1 !== null || l2 !== null || carry !== 0) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    
    return dummyHead.next;
};

// Helper function to create a linked list from an array of numbers
function createLinkedList(numbers) {
    const dummyHead = new ListNode();
    let current = dummyHead;
    for (const number of numbers) {
        current.next = new ListNode(number);
        current = current.next;
    }
    return dummyHead.next;
}

// Helper function to print a linked list
function printLinkedList(node) {
    const numbers = [];
    while (node !== null) {
        numbers.push(node.val);
        node = node.next;
    }
    console.log(numbers.join(" -> "));
}

// Test cases
const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);
const result1 = addTwoNumbers(l1, l2);
console.log("Test Case 1:");
printLinkedList(result1);  // Output: 7 -> 0 -> 8


const l5 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
const l6 = createLinkedList([9, 9, 9, 9]);
const result3 = addTwoNumbers(l5, l6);
console.log("Test Case 2:");
printLinkedList(result3);  // Output: 8 -> 9 -> 9 -> 9 -> 0 -> 0 -> 0 -> 1

/**
 * LeetCode Solution Link :-
 * 
 * https://leetcode.com/problems/add-two-numbers/submissions/1342686751/
 * 
 */



