def find_sum_of_three(nums, target):
   
   # Replace this placeholder return statement with your code
   nums.sort()
   for (idx, num) in enumerate(nums):
     left = idx + 1
     right = len(nums) - 1
     while left < right:
        sum = num + nums[left] + nums[right]
        if sum == target:
         return True
        if sum < target:
          left += 1
        if sum > target:
          right -= 1
     
   return False

def findSum(nums, target):
  nums.sort()
  for i in range(len(nums)):
    for j in range(i + 1, len(nums)):
      for k in range(j + 1, len(nums)):
        sum = nums[i] + nums[j] + nums[k]
        if sum == target:
          return True
  return False

print(findSum([1, 2, 36, 3, 4, 5], 9))
          