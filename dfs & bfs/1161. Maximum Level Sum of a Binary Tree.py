# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        """
               1
              / \
             7    0
           /   \     \
          7     -8     \
        /   \    /  \    9
       -5   4   2    5  / \ 
                        12  18
        queue add all node, => have max, pop queue?
        level 3  7 + -8 + 9
        level 4 -5 + 4 + 2 + 5 + 12 + 18
        def dfs(node):
            return node
        """
        max_sum, ans, level  = float('-inf'), 0, 0
        q = collections.deque()
        q.append(root)
        while q:
            level += 1
            sum_at_current_level = 0
            # iterate over all the node in the current level
            length = len(q) # iterate throught the current length first
            for _ in range(length):
                node = q.popleft()
                sum_at_current_level += node.val

                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            if max_sum < sum_at_current_level:
                max_sum, ans = sum_at_current_level, level
        return ans
            