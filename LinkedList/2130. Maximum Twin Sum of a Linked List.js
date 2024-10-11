/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  let temp = head
  let slow = head
  let fast = head
  if (head == null) return 0
  while (fast) {
      slow = slow.next
      fast = fast.next.next
  }
  // reverse linkedlist
  let reverse = (head) => {
      // 1-> 2 -> 3 -> 4
      let current = null
      while (head) {
          let temp = head.next //2-> 3 -> 4
          head.next  = current //-> null Head = [1] // current null
          current = head // current = head (1)
          head = temp // head => 2-> 3 -> 4
          
      }
      return current
  }
  let reversed = reverse(slow) // we just need reverse // lead to increase space to O(n)
  let max = 0
  while (reversed) {
      max = Math.max(max, reversed.val + head.val)
      reversed = reversed.next
      head = head.next
  }
  return max


};