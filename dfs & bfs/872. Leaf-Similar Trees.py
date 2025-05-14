# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def leafSimilar(self, root1, root2):
        """
        :type root1: Optional[TreeNode]
        :type root2: Optional[TreeNode]
        :rtype: bool
        """
        """
        def leaves(root):
            roots = []
            leafValues = []
            roots.append(root)
            while(len(roots) != 0):
                root = roots.pop()
                if not root.left and not root.right:
                    leafValues.append(root.val)
                if root.left:
                    roots.append(root.left)
                if root.right:
                    roots.append(root.right)
            return leafValues
        return leaves(root1) == leaves(root2)
        """
        def dfs(root, leaves):
            if root:
                if not root.left and not root.right:
                    leaves.append(root.val)
                dfs(root.left, leaves)
                dfs(root.right, leaves)
        leaves1 = []
        leaves2 = []
        dfs(root1, leaves1)
        dfs(root2, leaves2)
        return leaves1 == leaves2
        
