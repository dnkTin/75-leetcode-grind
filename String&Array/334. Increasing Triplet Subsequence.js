/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  if (nums.length < 3) return false
  let num1 = Number.POSITIVE_INFINITY
  let num2 = Number.POSITIVE_INFINITY
  for (let num of nums) {
      // find the num in nums that greater than num1 and num2 => that mean we can have a consequence triplet
      if (num1 >= num) {
          num1 = num
      } else if (num2 >= num) {
          num2 = num
      } else  {
          return true
      }
  }
  return false

};