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
var reverseList = function(head) {
    // create a new linked list from the original one
    let prev = null
    while (head) {
        let temp = head.next // hold the rest
        head.next = prev // reverse
        prev = head // update the prev
        head = temp
    }
    return prev
};