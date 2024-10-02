/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const x = {};
  let exist = false;
  for (let i = 0; i < nums.length; i++) {
      if (x[nums[i]] == undefined) {
          x[nums[i]] = nums[i]
      } else {
          exist = true
      }
  }
  return exist
};