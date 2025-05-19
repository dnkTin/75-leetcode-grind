# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# My try BFS go to all node at level, append it into queue, then loop again 
class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if not root:
            return []
        q = collections.deque()
        ans = []
        q.append(root)
        while q:
            current_level = []
            for _ in range(len(q)):
                current_node = q.popleft()
                current_level.append(current_node.val)
                if current_node.left:
                    q.append(current_node.left)
                if current_node.right:
                    q.append(current_node.right)
            if len(current_level):
                ans.append(current_level)
        return ans
    
