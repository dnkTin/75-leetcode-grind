/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  // brute force
  let count = 0
  let used = []
  for (let i = 0; i < nums.length -1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] == k && !used.includes(i) && !used.includes(j)) {
              count++
              used.push(...[i, j])
              break
          }
      }
  }
  return count
};