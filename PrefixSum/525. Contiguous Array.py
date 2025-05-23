class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        """
                     i
         1 2 3 4 5 6 7      
        [0,0,0,1,1,1,0]
        dic = {0: -1; -1: 0; -2: 1; -3: 2}
        count = -1
        i - dic[count]
        6 - dic[-1] = 6 - 0 = 6
        max = 6
        """
        prefix_sums = defaultdict(int)
        prefix_sums[0] = -1
        prefix_sum = 0
        ans = 0
        for currentIdx in range(len(nums)):
            if nums[currentIdx] == 1:
                prefix_sum += 1
            else:
                prefix_sum -= 1
            if prefix_sum in prefix_sums:
                previousIdx = prefix_sums[prefix_sum]
                rangeIdx = currentIdx - previousIdx
                ans = max(ans, rangeIdx)
            else:
                prefix_sums[prefix_sum] = currentIdx
        print(prefix_sums)
        return ans