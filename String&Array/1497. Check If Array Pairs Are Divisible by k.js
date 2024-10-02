/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange1 = function(arr, k) {
  const pairCnt = arr.length / 2
  if (arr.reduce(
      (collect, a) => collect + a, 0) % k != 0) {
          return false
  }
  let mod = 0
  
  for (let i = 0; i < arr.length; i+= 2) {
      let sum = arr[i] + arr[i + 1]
      if (sum == 0) continue
      if (sum < k) {
        mod += sum - k
      } else {
        mod += sum % k
      }
  }
  
  if (mod % k === 0 && mod >= 0) {
      return true
  }
  return false
};


var canArrange = function(arr, k) {
  const pairCnt = arr.length / 2
if (arr.reduce(
    (collect, a) => collect + a, 0) % k != 0) {
        return false
}
let freq = []
  for (let i = 0; i < arr.length; i++) {
      freq.push((arr[i] % k + k) % k)
  }
  for (let i = 0; i < k; i++) {
      if (freq[i] !== freq[k - i]) {
          return false
      }
  }
  return true
};

console.log(canArrange([-4,-7,5,2,9,1,10,4,-8,-3] , 3)) // true