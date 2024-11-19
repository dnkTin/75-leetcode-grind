class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}
// function to search a key in BST
// time complexity: O(h) where h is the height of the tree
function search(root, key) {
  // Base case: root is null or key is present at root
  if (root == null || root.key == key) {
    return root;
  }

  // key is greater than root's key
  if (key > root.key) {
    return search(root.right, key);
  }
  // key is smaller than root's key
  return search(root.left, key);
}

// insert a node in BST
// A new key is always inserted at a leaf
// Start searching a key from root till we hit a leaf node
// Once a leaf node is found, the new node is added as a child of the leaf node
function insert(root, key) {
  // Base case: root is null
  if (root == null) {
    return new Node(key);
  }
  // duplicates not allowed
  if (key == root.key) {
    return root;
  }
  if (key < root.key) {
    root.left = insert(root.left, key);
  } else {
    root.right = insert(root.right, key);
  }

  return root;
}

// inorder: a utility function to do inorder traversal of BST
function inorder(root) {
  if (root != null) {
    inorder(root.left);
    console.log(root.key + " ");
    inorder(root.right);
  }
}
// get the inorder successor of the node from the right subtree
function getSuccessor(curr) {
  curr = curr.right;
  while (curr != null && curr.left != null) {
    // keep going left because the left most node will be the inorder successor
    curr = curr.left;
  }
  return curr;

}
/*
// delete a node in BST
function delNode(root, x) {
  // There are 3 senarios:
  // Node to be deleted is a leaf node: null it out
  // Node to be deleted has one child: replace the node with the child node
  // Node to be deleted has two children: find the inorder successor of the node. Copy contents of the inorder successor to the node and delete the inorder successor.

  // base case
  if (root == null) return root
  // If key to be searched is in the subtree
  if (root.key < x) {
    root.right = delNode(root.right, x)
  } else if (root.key > x) {
    root.left = delNode(root.left, x)
  } else {
    // If root matches the given key
    // Case when root has 0 children or only right child
    if (root.left == null) {
      return root.right
    }
    if (root.right == null) {
      return root.left
    }

    // when both children has present
    let succ = getSuccessor(root)
    root.key = succ.key
    root.right = delNode(root.right, succ.key)

  }
  return root
}

*/


// write function delNode to delete node form BST, input root and key to be deleted
const delNode = (root, key) => {
  // base case
  if (root == null) return root
  // If key to be searched is in the subtree
  if (root.key < key) {
    root.right = delNode(root.right, key)
  } else if (root.key > key) {
    root.left = delNode(root.left, key)
  } else {
    // If root matches the given key
    // Case when root has 0 children or only right child
    if (root.left == null) {
      return root.right
    }
    if (root.right == null) {
      return root.left
    }

    // when both children has present
    let succ = getSuccessor(root)
    root.key = succ.key
    root.right = delNode(root.right, succ.key)

  }
  return root
}


// creating a hard coded tree for keeping the length of the code small
// we need to make sure that BST properties is maintained
// if we try some other cases:
let root = new Node(50);
// root.left = new Node(30)
// root.right = new Node(70)

// root.left.left = new Node(20)
// root.left.right = new Node(40)

// root.right.left = new Node(60)
// root.right.right = new Node(80)

root = insert(root, 30);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 80);

/**
 *     50
 *    /  \
 *  30   70
 *  / \  / \ 
 * 20 40 60 80
 */
// inorder(root)
inorder(root);

// search for a key
// console.log(search(root, 19) != null ? "Key found" : "Key not found") // Key not found
console.log(search(root, 20) != null ? "Key found" : "Key not found"); // Key found


