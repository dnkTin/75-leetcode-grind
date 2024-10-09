/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
  let result = 0
  let prevSum = 0

  for (let i = 0; i < gain.length; i++) {
      prevSum += gain[i]
      result = Math.max(prevSum, result)
  }
  return result
};