/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage_1 = function(nums, k) {
    
  if (k > nums.length) {
    return null
}

let start = 0
let end = k
let sum = Number.NEGATIVE_INFINITY
let counter = 0
let currentSum = null

// calculate the first from start to end
while (counter < k) {
    currentSum += nums[counter++]
}
// after get the first time we update start and end index
sum = currentSum
start++
end++

while (end <= nums.length) {
    currentSum += nums[end - 1] - nums[start - 1]
    if (sum < currentSum) {
        sum = currentSum
    }
    end++
    start++
}
return sum/k
};

var findMaxAverage_2 = function(nums, k) {
    
  let sum = Number.NEGATIVE_INFINITY
  let start = 0
  let currentSum = 0
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i]

    if (i - start + 1 == k) {
        sum = Math.max(sum, currentSum)
        currentSum -= nums[start]
        start++
    }
  }
  return sum/k

};

var findMaxAverage = (nums, k) => {
  let currentSum = 0;
  let sum = Number.NEGATIVE_INFINITY
  for (let i = 0; i < k; i++) {
    currentSum += nums[i]
  }
  for (let i = k; i< nums.length; i++) {
    currentSum += nums[i] - nums[i - k]
    sum = Math.max(sum, currentSum)
  }
  return sum / k
}


console.log(findMaxAverage([5], 1)) // 12.75