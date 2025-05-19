# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# using BFS
"""
             0 
         /       \
         
"""

class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        max_sum, ans, level = float("-inf"), 0, 0
        q = collections.deque()
        q.append(root)

        while q: # O(1)
            level += 1
            sum_at_current_level = 0
            # iterate over all the nodes in the current level
            for _ in range(len(q)): # O(n) it takes all nodes
                node = q.popleft()
                sum_at_current_level += node.val
                # add node of the next level to q because we use for loop with previous len q
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            if max_sum < sum_at_current_level:
                max_sum, ans = sum_at_current_level, level
        return ans

#DFS

class Solution:
    def dfs(self, node: Optional[TreeNode], level: int, sum_of_nodes_at_level: List[int]) -> None:
        if node is None:
            return
        if len(sum_of_nodes_at_level) == level:
            sum_of_nodes_at_level.append(node.val)
        else:
            sum_of_nodes_at_level[level] += node.val
        self.dfs(node.left, level + 1, sum_of_nodes_at_level)
        self.dfs(node.right, level + 1, sum_of_nodes_at_level)
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        sum_of_nodes_at_level = []
        self.dfs(root, 0, sum_of_nodes_at_level)
        max_sum = float("-inf")
        ans = 0
        for i in range(len(sum_of_nodes_at_level)):
            if max_sum < sum_of_nodes_at_level[i]:
                max_sum, ans = sum_of_nodes_at_level[i], i + 1
        return ans
        
        