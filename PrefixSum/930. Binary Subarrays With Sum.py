class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        prefix_sums = {0: 1}
        count = 0
        curr_sum = 0
        for i in range(len(nums)):
            curr_sum += nums[i]
            if curr_sum - goal in prefix_sums:
                count += prefix_sums[curr_sum - goal]
            prefix_sums[curr_sum] = prefix_sums.get(curr_sum, 0) + 1
        return count