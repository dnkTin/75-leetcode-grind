class Solution:
    def threeSumSmaller(self, nums: List[int], target: int) -> int:
        nums.sort()
        if len(nums) < 3:
            return 0
        result = 0
        for i in range(len(nums) - 2):
            left = i + 1
            right = len(nums) - 1
            currentSum = 0
            while left < right:
                if nums[left] + nums[right] + nums[i] < target:
                    currentSum += right - left
                    left += 1
                else:
                    right -= 1
            result += currentSum
        return result
                