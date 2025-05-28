class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        max_element = max(nums)
        ans = start = max_elements_in_window = 0
        for end in range(len(nums)):
            if nums[end] == max_element:
                max_elements_in_window += 1
            while max_elements_in_window == k:
                if nums[start] == max_element:
                    max_elements_in_window -= 1
                start += 1
            ans += start
        return ans
"""
max = 10 k = 3
                                             end
 0  1  2   3    4   5    6  7   8    9  10    11   12 13  14
[4, 3, 7, [10], 2, [10], 1, 6, [10], 7, [10], [10], 9, 8, 3]
start = 9
max_elements_in_window = 3
ans = 4 +4 + 6 + 9 + 9 + 9 + 9 = 36 + 14 = 50
output 50
"""
class Solution:
    def countSubarrays(self, nums: List[int], k: int) -> int:
        max_element = max(nums)
        indexes_of_max_elements = []
        ans = 0
        for index, element in enumerate(nums):
            if element == max_element:
                indexes_of_max_elements.append(index)
            freq = len(indexes_of_max_elements)
            if freq >= k:
                ans += indexes_of_max_elements[-k] + 1
        return ans
"""
k = 2 max = 3
 
[1, 3, 2, 3, 3]
index_of_max_elements = []
freq = 
ans
"""