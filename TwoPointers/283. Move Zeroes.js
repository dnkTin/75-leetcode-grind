/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let numsTemp = []
for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
        numsTemp.push(nums[i])
    }
}
for (let i = 0; i < nums.length; i++) {
    if (numsTemp[i]) {
        nums[i] = numsTemp[i]
    } else {
      nums[i] = 0
    }
}
return numsTemp
};

// O(n) time complexity
// O(n) space complexity


var moveZeroes_2 = function(nums) {
  const swap = (i, j) => {
      nums[i] = nums[j]
      nums[j] = 0
  }
 // let i will be the index of zero => 
 for (let i = 0; i < nums.length; i++) {
   if (nums[i] == 0) {
      let j = i+1
      // find the non zero
      while (j < nums.length) {
          if (nums[j] != 0) {
              swap(i, j)
              break
          }
          j++
      }

   }
 }
 // time complexity is O(n^2)
 // space complexity is O(1)
 
};

// move all the non zero to the front of the array
// then fill the rest of the array with zero
var moveZeroes_3 = function(nums) {
  let lastNonZeroFoundAt = 0
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] != 0) {
          nums[lastNonZeroFoundAt++] = nums[i]
      }
  }
  for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
      nums[i] = 0
  }
  return nums
};
// O(n) time complexity
// O(1) space complexity

//


console.log(moveZeroes([0,1,0,3,12])) // [1,3,12,0,0]