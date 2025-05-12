"""
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = i; j < nums.length; j++) {
          sum += nums[j];
          if (sum == k) {
              count++;
          }
      }
  }
  return count;
};
"""

nums = [1,2,3], k = 3

count = 2
curr_sum = 6
h = {1: 1, 3: 1, 6: 1}
num = 2
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = curr_sum = 0
        h = defaultdict(int)

        for num in nums:
            curr_sum += num
            if curr_sum == k:
                count += 1
            count += h[curr_sum - k]
            h[curr_sum] += 1
        return count
