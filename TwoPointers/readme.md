twopoint


left and right

i hold something that really need to find something by creating loop => to do that we create j hehe



https://www.geeksforgeeks.org/two-pointers-technique/

Better Approaches – Binary Search and Hashing
We can use more methods like Binary Search and Hashing to solve this problem (Please refer Two Sum article for details) in better time complexity but Two Pointer Technique is the best solution for this problem that works well for sorted arrays.

Two-Pointer Technique – O(n) time and O(1) space
The idea of this technique is to begin with two corners of the given array. We use two index variables left and right to traverse from both corners.

Initialize: left = 0, right = n – 1
Run a loop while left < right, do the following inside the loop

Compute current sum, sum = arr[left] + arr[right]
If the sum equals the target, we’ve found the pair.
If the sum is less than the target, move the left pointer to the right to increase the sum.
If the sum is greater than the target, move the right pointer to the left to decrease the sum.
