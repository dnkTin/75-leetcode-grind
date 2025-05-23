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
"""
nums = [1,2,3], k = 3

count = 2
curr_sum = 6
h = {1: 1, 3: 1, 6: 1}
num = 2
O(n)
O(n)
"""

from collections import defaultdict
from typing import List


class Solution2:
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

#O(n^3)
class Solution1:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        for start in range(len(nums)):
            for end in range(start + 1, len(nums) + 1):
                sum = 0
                for i in range(start, end):
                    sum += nums[i]
                if sum == k:
                    count += 1
        return count


# Cach 2 leetcode TLE (cach giai cua leetcode giong cach minh)
class SolutionPrefix:
    def subarraySum(self, nums: List[int], k: int) -> int:
        # we need pref with length nums + 1 
        # because -> the sum will be the first index
        pref = [0] * (len(nums) + 1)
        pref[0] = 0
        for i in range(0, len(nums)):
            pref[i + 1] = pref[i] + nums[i]
        # [0, 1, 2, 3]
        # [1, 1, 1]
        #
        count = 0
        for start in range(len(nums)):
            for end in range(start + 1, len(pref)):
                if pref[end] - pref[start] == k:
                    count += 1
        return count
"""
a = Solution()
a.subarraySum([-1, -1, 1], 0) # output: 1
[0, -1, -2, -1]
[-1, -1, 1]
start = 0, end = 1 -1 - 0
start = 0, end = 2 -2 - 0
start = 0, end = 3  -1 - 0
start = 1, end = 2 -2 + 1
start = 1, end = 3 -1 + 1 = 0
start = 2, end = 3 -1 + 2 = 1

"""
# cach cua minh giong cach 3 leetcode - O(n^2)
class Solutionn2:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = 0
        for i in range(len(nums)):
            currentSum = 0
            for j in range(i, len(nums)):
                currentSum += nums[j]
                if currentSum == k:
                    count += 1 
        return count
    
class Solutionn33:
    def subarraySum(self, nums: List[int], k: int) -> int:
        prefix_sums = defaultdict(int)
        prefix_sums[0] = 1
        sum = 0
        count = 0
        l = len(nums)
        for i in range(l):
            sum += nums[i]
            count += prefix_sums[sum - k]
            prefix_sums[sum] += 1
            print('------------')
            print(count)
            print(prefix_sums)
        return count
"""
[-1,4, -1, 2, 0, 3] k = 3
prefix_sums = {0: 1, 
-4: 0,
3: 1,
-1: 0,
2: 1,
1: 0,
4: 2,
7: 1}
sum = -1 + 4 = 3 - 1 = 2 + 2 = 4 + 0 = 4 + 3 = 7
count = 3
=> output: 3 [(-1, 4), (4, -1), (0, 3), 3]
"""
ab = Solutionn33()
print(ab.subarraySum([-1, 4, -1, 2, 0, 3], 3))