
from collections import deque
from typing import List


class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        curr_sum = 0
        count = 0
        prefix_sum = {curr_sum: 1}

        for i in range(len(nums)):
            curr_sum += nums[i] % 2

            if curr_sum - k in prefix_sum:
                count = count + prefix_sum[curr_sum - k]
            prefix_sum[curr_sum] = prefix_sum.get(curr_sum, 0) + 1
        return count
        """
                            i        
        nums = [1, 1, 2, 1, 1]
        curr_sum = 4
        curr_sum - k = 1
        count = 2
        prefix_sum = {0: 1, 1: 1, 2: 2, 3: 1, 4 : 1}
        => count = 2
        """
class Solution1:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        odd_indicies = deque()
        count = 0
        last_popped = -1 # why last popped = -1?
        gapIndex = 0

        for i in range(len(nums)):
            #if element is odd, append its index to the queue
            if nums[i] % 2 == 1:
                odd_indicies.append(i)
            # if the number of odd numbers exceeds k, remove the first odd index
            if len(odd_indicies) > k:
                last_popped = odd_indicies.popleft()
            # if there are exactly k odd numbers, add the number of even numbers
            # in the beginning of the subarray to the result
            if len(odd_indicies) == k:
                gapIndex = odd_indicies[0] - last_popped # the last appear times of 2 odd index create a subarray that have k odd index in it
                count += gapIndex
        return count
        """
                        i                    
        nums = [1,1,2,1,1] k = 3
        odd_indicies = [1, 3, 4] 
        count = 2
        last_popped = 0
        initial_gap = 1  - 0
        => output: subarrays: 2
        """
class Solution2:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        subarrays = 0
        initial_gap = 0
        qsize = 0
        start = 0
        for end in range(len(nums)):
            # if current element is odd, increment qsize by 1
            if nums[end] % 2 == 1:
                qsize += 1
            if qsize == k:
                initial_gap = 0
                # calculate the number of even elements in the beginning of subarray
                while qsize == k:
                    qsize -= nums[start] % 2
                    initial_gap += 1
                    start += 1
            subarrays += initial_gap
        return subarrays