var twoSum = function(nums, target) {
  let remain = {};
  for (let i = 0; i < nums.length; i++) {
      remain[target - nums[i]] = i
      
  }
  for (let i = 0; i < nums.length; i++) {
      if (remain.hasOwnProperty(nums[i])) {
          return [remain[nums[i]], i]
      }
  }
  return []
};

twoSum([3,2,4], 6)