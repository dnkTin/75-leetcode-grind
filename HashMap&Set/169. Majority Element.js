/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let occurrences = new Map();
  for (let num of nums) {
      occurrences.set(num, (occurrences.get(num) || 0) + 1)
  }
  let result = null;
  occurrences.forEach((value, key) => {
      if (value > nums.length / 2 ) {
          result = key;
      }
  });
  return result;

};

var majorityElement1 = function(nums) {
    nums.sort((a, b) => a - b);
    let count = 1;
    let currentNumber = nums[0]
    let target = nums.length / 2;
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        if (num !== currentNumber) {
            // reset
            count = 1;
            currentNumber = num;

        } else {
            count++;
        }
        if (count > target) {
            return currentNumber
        }
    }
    return null;
}

// boyer-moore voting algorithm
var majorityElement3 = function (nums) {
    let count = 0;
    let candidate = null;
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}
majorityElement3([3, 2, 3, 2, 1])