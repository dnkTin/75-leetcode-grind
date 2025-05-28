class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        left = 0
        count = 0
        ans = 0
        for right in range(len(nums)):
            if nums[right] == 0:
                count += 1
            if count > k:
                while count > k:
                    if nums[left] == 0:
                        count -= 1
                    left += 1
            ans = max(ans, right - left + 1)
        return ans
        """
        left = 0
        count = 2
        ans = 4 - 0 + 1 = 5    9 - 3 + 1 = 7
        1 2 3 4 5 6 7 8 9 10
              l
                          r
        1 1 1 0 0 0 1 1 1 1
        """