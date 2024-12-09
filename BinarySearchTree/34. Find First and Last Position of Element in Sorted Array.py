from bisect import bisect_left, bisect_right


class Solution(object):
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        n = len(nums)
        iLeft = bisect_left(nums, target)
        if iLeft == n or nums[iLeft] != target:
            return [-1, -1]
        return [iLeft, bisect_right(nums, target) - 1]
        
print(Solution().searchRange([5,7,7,8,8,10], 8))