// time complexity: O(log(n))
var searchBST = function(root, val) {
  if (!root) return null; // If the tree is empty or we've reached a leaf, return null
  if (root.val === val) return root; // If the current node has the target value, return it
  
  // If the target value is less than the current node's value, search the left subtree
  if (val < root.val) {
      return searchBST(root.left, val);
  } else {
      // Otherwise, search the right subtree
      return searchBST(root.right, val);
  }
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
  // time complexity: O(log(n))
  while (root) {
      if (root.val == val) {
          return root
      } else if (root.val < val) {
          root = root.right
      } else {
          root = root.left
      }
  }
  return null
};