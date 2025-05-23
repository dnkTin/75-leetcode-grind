# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
"""
node = 1
left = findLCA(2) contain 9 & 11 => return 2   right = findLCA(3)
left = findLCA(4) (return 9) right = findLCA(5) => return 11
left = findLCA(8) => return None right = findLCA(9) => return 9
                        15
                      /    \
                    /        \
                  8           22
                /   \        /   \
              5     13      18    25
            /  \    / \    /  \   / \
          2     6 10  14  17  20 24  26
"""
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def findLCA(node: 'TreeNode'):
            if not node:
                return None
            # we know it because node is in the binary tree
            if node == q or node == p:
                return node
            left = findLCA(node.left)
            right = findLCA(node.right)
            if left and right:
                return node
            return left if left else right
        # To check if both p and q are in the tree, we can traverse the tree and count matches
        def exists(node, target):
            if not node:
                return False
            if node == target:
                return True
            return exists(node.left, target) or exists(node.right, target)

        if not exists(root, p) or not exists(root, q):
            return None  # One or both nodes are not in the tree

        return findLCA(root)


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        stack = [root]
        parent = {root: None}
        while p not in parent or q not in parent:
            node = stack.pop()
            if node.left:
                parent[node.left] = node
                stack.append(node.left)
            if node.right:
                parent[node.right] = node
                stack.append(node.right)
        ancestorOfP = set()
        while p:
            ancestorOfP.add(p)
            p = parent[p]
        while q not in ancestorOfP:
            q = parent[q]
        return q