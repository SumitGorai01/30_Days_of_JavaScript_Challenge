
/**
 * Activity 4: Merge Two Sorted Lists
 * 
 * Task 4: Solve the "Merge Two Sorted Lists problem on LeetCode.
 * 
 * Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
 * Create a few test cases with linked lists and log the merged list.
 * 
 */


// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  // Function to merge two sorted linked lists
  function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
  
    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
      current = current.next;
    }
    current.next = l1 !== null ? l1 : l2;
  
    return dummy.next;
  }
  
  function printList(node) {
    const values = [];
    while (node) {
      values.push(node.val);
      node = node.next;
    }
    console.log(values.join(" -> "));
  }
  
  const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
  const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
  const mergedList = mergeTwoLists(l1, l2);
  printList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4