# dfs, prefix sum
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


"""
                                10
                              /    \
                             /       \
                            5         -3
                           / \          \ 
                          3   2           11
                         /  \  \
                        3   -2   1
     targetSum = 8 => [5, 3], [5, 2, 1] [-3, 11]                    
"""
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        count, k = 0, targetSum
        h = defaultdict(int)
        
        def dfs(node: TreeNode, curr_sum) -> None:
            nonlocal count
            if not node:
                return
            # current prefix sum
            curr_sum += node.val
            # current sum equal target from the beginning
            if curr_sum == k:
                count += 1
            # the number of times the curr_sum - targetSum has occurred already,
            # determines the number of times a path with sum k 
            # has occurred up to the current node
            count += h[curr_sum - k]

            # add the current sum into a hashmap to use it during the child node's processing
            h[curr_sum] += 1
            # process the left and right node
            dfs(node.left, curr_sum)
            dfs(node.right, curr_sum)
            # remove the current sum from the hashmap in order not to use it during the parallel subtree processing
            h[curr_sum] -= 1
        dfs(root, 0)
        return count

