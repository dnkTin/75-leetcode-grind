/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  nums.sort((a,b) => a - b);
  let result = 0;
  for (let c = 2; c < nums.length; c++) {
      let a = 0;
      let b = c - 1
      while (a < b) {
          if (nums[a] + nums[b] > nums[c]) {
              result +=b - a
              b--
          } else {
              a++
          }
      }
  }
  return result;
};