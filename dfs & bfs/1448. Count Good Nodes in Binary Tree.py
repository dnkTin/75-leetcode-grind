# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        max = root.val
        count = []
        def dfs(root, count, max):
            if root:
                if root.val >= max:
                    count.append(root.val)
                    max = root.val
                dfs(root.left, count, max)
                dfs(root.right, count, max)
            return len(count)
        
        return dfs(root, count, max)