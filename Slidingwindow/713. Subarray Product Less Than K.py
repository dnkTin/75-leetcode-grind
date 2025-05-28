class Solution:
    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:
        # handle edge cases where k is 0 or 1 (no subarrays possible)
        if k <= 1:
            return 0
        total_count = 0
        product = 1
        # use two pointers to maintain a sliding window
        left = 0
        for right, num in enumerate(nums):
            product *= num # expand the window by indcluding the element at the right pointer
            # shrink the window from the left while the product is greater than or equal to k
            while product >= k:
                # remove the element at the left pointer from the product
                product //= nums[left]
                left += 1
                # update the total count by adding the number of valid subarrays 
                # with the current window size

                # right - left + 1 represents the current window size
            total_count += right - left + 1
        return total_count

