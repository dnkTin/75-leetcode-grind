# first problem & solution go here, add more example in specific solution if possible.

from typing import List


class Solution:
  # counting bits 338
  # chép lại cách giải thích 
  def countBits(self, n: int) -> list[int]:
    """
    0: 0000 0
    1: 0001 1
    2: 0010 1
    3: 0011 2 % 2 + // 2
    4: 0100
    5: 0101
    6: 0110
    7: 0111
    8: 1000
    9: 1001
    10: 1010
    """
    result = [0]
    for i in range(1, n + 1):
      result.append(result[i // 2] + i % 2)
    return result
    """
    Time complexity: O(n)
    Space Complexity: O(n)
    """
    
    """
    12
    i = 3
    0   1  2  3  4  5  6  7  8  9  10 11  12
    [0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2]
    """
  # climbing stairs 70
  def climbStairs(self, n: int) -> int:
    ways = [1, 1, 2]
    for step in range(3, n + 1):
      ways.append(ways[step - 1] + ways[step - 2])
    return ways[n]
  """
  This is fibonaci number
  """
  def climbStairs(self, n: int) -> int:
    if n == 1:
      return 1
    first = 1
    second = 2
    for i in range(3, n + 1):
      third = first + second
      first = second
      second = third
    return second
  # maximum product sub-array 152
  def maxProduct(self, nums: List[int]) -> int:
    min_p = max_p = nums[0]
    maximum_product = max_p
    for num in nums[1:]:
      temp = min_p
      min_p = min(num, num*min_p, num*max_p)
      max_p = max(num, max_p * num, temp * num)
      maximum_product = max(maximum_product, max)
    return maximum_product
  # unique paths 62
  # coin change 322
  # maximal square 221
  # minimum path sum 64
  # house robber 198
  # min cost climbing stairs
  # house robber ii
  # longest increasing subsequence
  # word break 139
  # edit distance 72
  # combinations
  def combine(self, n: int, k: int) -> list[list[n]]:
    result = []
    def comb(beg, curr):
      if (len(curr)) == k:
        result.append(curr)
        return
      if len(curr) > k:
        return
      for ind in range(beg, n + 1):
        comb(ind + 1, curr + [ind])

    comb(1, [])
    return result
  #combination sum
  def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
    candidates.sort()
    result = []

    def comb(curr, start, target):
      if target == 0:
        result.append(curr)
        return
      for i in range(start, len(candidates)):
        if candidates[i] > target:
          break
        comb(curr + [candidates[i]], i, target - candidates[i])
        return
    comb([], 0, target)
    return result
  # dp approach
  def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
    result = [[] for _ in range(target + 1)]
    result[0] = [[]]
    for cand in candidates:
      for i in range(cand, target + 1):
        for comb in result[i - cand]:
          result[i].append(comb + [cand])
    return result[target]
  
  #recursive/back-tracking approach
  # combination sum iv 377
  def combinationSum4(self, nums: list[int], target: int) -> int:
    dp = [0] * (target + 1)
    dp[0] = 1
    for i in range(1, target + 1):
      for num in nums:
        if i >= num:
          dp[i] += dp[i - num]
    return dp[-1]
  """
  Time complexity: len(nums) * target
  Space complexity: target
  nums = [1, 2, 3] target = 4 => 
  1111, 112, 121, 211,  22, 13, 31 => 7 ways
  
  dp = [1, 0, 0, 0, 0]
  i = 0
  num = 1


  [1, 1, 2, 4, 7]

  
  nums = [9], target = 3
  """
  # n-th tribonacci number
  def tribonacci(self, n: int) -> int:
    if n == 0:
      return 0
    if n < 3:
      return 1
    t0, t1, t2 = 0, 1, 1
    for i in range(3, n + 1):
      tn  = t0 + t1 + t2
      t0, t1, t2 = t1, t2, tn
    return tn
  # interleaving string 97
  """
  [
      0   1      2     
     ""     d      e    
  0  ""
  0  e   False, False 
  1  p   False, False
  ]
  """
  def isInterLeave(self, s1: str, s2: str, s3: str) -> bool:

    n, m = len (s1), len(s2)
    if n + m != len(s3):
      return False
    dp = [[False for _ in range(n+ 1)]]
    dp[0][0] = True

    for r in range(m + 1):
      for c in range(n + 1):
        if c > 0 and dp[r][c - 1] and s1[c - 1] == s3[c - 1 + r]:
          dp[r][c] = True
        elif r > 0 and dp[r - 1][c] and s2[r - 1] == s3[r - 1 + c]:
          dp[r][c] = True
    return dp[-1][-1]
  

  
  def leastInterval(self, tasks: List[str], n: int) -> int:
      """
      n = 3
      abc abc
      => a: 1
      => b: 2
      => c: 2
      so luong phan tu khac nhau: 3
      => space 4
      => a b c idle a b c 
      vong loop hien tai la het => minh loop tu phan tu co su xuat hien nhieu nhat
      [a, b, c, idle, a ,b c ] 
      idle rest: 1
      """
      d = {}
      for i in tasks:
          if i in d:
              d[i] += 1
          else:
              d[i] = 1
      lst = sorted(d.values(), reverse = True)
      max_number = lst[0]

      i = 0
      counter = 0
      while i < len(lst) and lst[i] == max_number:
          counter += 1
          i += 1
      ret = (max_number - 1) * (n + 1) + counter
      return max(ret, len(tasks))
  
  