# https://leetcode.com/problems/add-two-numbers/description/
# Question??
# curr.next = newNode
# curr = newNode

from typing import Optional


# Definition for singly-linked list.
class ListNode:
  def __init__(self, val=0, next=None) -> None:
    self.val = val
    self.next = next


class Solution:
  def addTwoNumber(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
    result = ListNode(0)
    curr = result
    carry = 0
    while l1 != None or l2 != None or carry != 0:
      l1Val = l1.val if l1 else 0
      l2Val = l2.val if l2 else 0
      columnSum = l1Val + l2Val + carry
      carry = columnSum // 10
      #  tao file debug - in ra dummyHead, in ra curr
      newNode = ListNode(columnSum % 10)
      curr.next = newNode
      curr = newNode
      l1 = l1.next if l1 else None
      l2 = l2.next if l2 else None

    return result.next

# Solution.addTwoNumber(None, [2,3,4], [5,6,4])