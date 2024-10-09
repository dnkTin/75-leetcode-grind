/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
  if (nums.length <= k) {
      return nums.length
  }
  let counter = 0
  let rightIdx = 0
  // [11 00 010] 2
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] == 0) {
          if (counter > k) {
              break
          }
          counter++
      }
      rightIdx++
  }
  let leftIdx = 0;
  while (rightIdx < nums.length) {
      if (nums[rightIdx] == 1) rightIdx++
      else {
          while (leftIdx < rightIdx) {
              // find the first zero
              if (nums[leftIdx] == 0) {
                  break
              } else {
                  leftIdx++
              }
          }
      }
  }
  return rightIdx - leftIdx + 1
};
console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0], 2)) // 6