/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
  // find the middle node
  let beforeMiddle = head
  let slow = head
  let fast = head
  // ki thuat slow fast
  while (fast != null && fast.next != null) {
      beforeMiddle = slow
      slow = slow.next
      fast = fast.next.next
  }
  if (slow == fast) {
      head = null
  } else {
      // slow will be the middle node
      beforeMiddle.next = slow.next
  }
  
  return head
};