/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumAfterOperation = function (nums) {
  let maxEnding = nums[0] * nums[0];
  let indexForLastOperation = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let sum1 =
      maxEnding +
      nums[i] * nums[i] -
      indexForLastOperation * indexForLastOperation +
      nums[indexForLastOperation];
    let sum2 = maxEnding + nums[i];
    if (sum1 >= sum2) {
      indexForLastOperation = i;
      maxEnding = sum1;
    } else {
      if (sum2 < 0) {
        maxEnding = nums[i] * nums[i];
        indexForLastOperation = i;
      }
    }
  }
  return maxEnding;
};

console.log(maxSumAfterOperation([2, -1, -4, -3])); // 17
