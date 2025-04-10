"""
left = 0
1 gia tri => khi gia tri nay thay doi thi thu hep trai


* Number.NEGATIVE_INFINITY


* Number.MIN_VALUE

Constraint??
* is the number has negative value or not?

https://www.geeksforgeeks.org/window-sliding-technique/

1. Fixed Size Sliding Window:
The general steps to solve these questions by following below steps:

Find the size of the window required, say K.
Compute the result for 1st window, i.e. include the first K elements of the data structure.
Then use a loop to slide the window by 1 and keep computing the result window by window.
2. Variable Size Sliding Window:
The general steps to solve these questions by following below steps:

In this type of sliding window problem, we increase our right pointer one by one till our condition is true.
At any step if our condition does not match, we shrink the size of our window by increasing left pointer.
Again, when our condition satisfies, we start increasing the right pointer and follow step 1.
We follow these steps until we reach to the end of the array.



function slidingWindow(arr, k, processWindow):
  # initialize the window result (sum, product, count, etc)
  # compute the initial window result
  windowResult = INITIAL_VALUE
  for i from 0 to k - 1
    UPDATE windowResult with arr[i]

  # process the first window
  processWindow(windowResult)

  # slide the window across the array
  for i from k to length of arr - 1:
    UPDATE windowResult BY ADDING arr[i]
    Update windowResult BY Removing arr[i - k]
    processWindow(windowResult)

windowResult, processWindow function, adding or removing element of array to preserve the condition

"""
class Solution:
  # 187
  def findRepeatedDnaSequences(self, s: str) -> list[str]:
        # window result []
        # process function -> 1 hash to contain the substring of 10 letters, 
        # if exist -> add to another has, if first time -> add to the hash container
        L, n = 10, len(s)
        seen, output = set(), set()
        # iterate over all sequences of length L
        for start in range(n - L + 1):
            tmp = s[start: start + L] # extract string here take time complexity?
            if tmp in seen:
                output.add(tmp[:]) # dau [:] la gi?, neu xuat hien nhieu hon 2 lan thi nhu the nao?
            seen.add(tmp)
        return list(output)

  # 239
  def maxSlidingWindow(self, nums: list[int], k: int) -> list[int]:
        """
        1. Initial
        2. current_window, output and process function to removing or adding element
        3. collect output
        """
        def clean_up(i, current_window, nums):
            while current_window and nums[i] >= nums[current_window[-1]]:
                del current_window[-1]
        
        if len(nums) == 1:
            return nums
        output = []
        current_window = []

        # iterate over the first w element in nums (initial 1)
        for i in range(k):
            clean_up(i, current_window, nums)
            current_window.append(i)
        # collect the first one (maximum element of the current window to the output)
        output.append(nums[current_window[0]])

        # step 2 
        for i in range(k, len(nums)):
            clean_up(i, current_window, nums)
            # remove the first element of current window if it has fallen out of the current window
            if current_window and current_window[0] <= (i - k):
                del current_window[0]
            output.append(nums[current_window[0]])
            current_window.append(i)
        return output
a = Solution().maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)
print(a)
