"""
# Definition for a Node.
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None
"""


class Solution:
    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':
        p1, p2 = p, q
        while p1 != p2:
            p1 = p1.parent if p1.parent else q
            p2 = p2.parent if p2.parent else p
        return p1
    """
                        3
                    /        \
                  /           \
                 5             1
               /   \         /   \
             6     2       0     8
                 /   \
                7     4   
Ex2:
p = 4, q = 6
p1 = 4, p2 = 6
1: p1 = 2, p2 = 5
2: p1 = 5 p2 = 3
3: p1 = 3 p2 = 4
4: p1 = 6 p2 = 2
5 p1 = 5 p2 = 5 => p1 == p2 => return
the same as linked list
Ex1:
p = 5 q = 1
p1 = 5, q =1
  while 5 != 1
    p1 = 3
    p2 = 3
    => return 3

    """

class Solution:
    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':
        # Time complexity: O(n), where n is the number of nodes in the tree
        # Space complexity: O(h), where h is the height of the tree
        # we use findLCA to find the lowest common ancestor of p and q, the time complexity is O(n)
        # and the space complexity is O(h) because we use recursion to find the lowest common ancestor
        # we use findParent to find the root of the tree, the time complexity is O(h) and the space complexity is O(1)
        def findParent(node: 'Node'):
            while node.parent:
                node = node.parent
            return node
        def findLCA(node: 'Node'):
            if not node:
                return None
            if node == p or node == q:
                return node
            left = findLCA(node.left)
            right = findLCA(node.right)
            if left and right:
                return node
            return left if left else right
        root = findParent(p)
        return findLCA(root)
class Solution2:
    # Time complexity: O(h), where h is the height of the tree
    # Space complexity: O(1)
    # This solution uses the fact that the tree is a binary tree and we can find the depth of each node
    def lowestCommonAncestor(self, p: 'Node', q: 'Node') -> 'Node':
        def findDepth(node: 'Node'):
            depth = 0
            while node:
                depth += 1
                node = node.parent
            return depth
        depthP = findDepth(p)
        depthQ = findDepth(q)
        while depthP > depthQ:
            p = p.parent
            depthP -= 1
        while depthQ > depthP:
            q = q.parent
            depthQ -= 1
        while p != q:
            p = p.parent
            q = q.parent
        return p
