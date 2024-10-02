const height = [1,8,6,2,5,4,8,3,7]
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let maxArea = 0
  while (left < right) {
      const min = Math.min(height[left], height[right])
      console.log(min)
      const currentArea = (right - left) * min
      if (currentArea > maxArea) {
          maxArea = currentArea
      }
      if (height[left] < height[right]) {
          left++
      } else {
          right--
      }
  }
  return maxArea
};
maxArea(height)