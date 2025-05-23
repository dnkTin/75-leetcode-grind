# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# bfs
class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        # at each level we will get the last val not the node
        if not root:
            return []
        queue =  collections.deque()
        queue.append(root)
        result = []
        while queue:
            current_level_nodes = []
            for _ in range(len(queue)):
                current_node = queue.popleft()
                current_level_nodes.append(current_node.val)
                if current_node.left:
                    queue.append(current_node.left)
                if current_node.right:
                    queue.append(current_node.right)
            result.append(current_level_nodes[-1])
        return result
