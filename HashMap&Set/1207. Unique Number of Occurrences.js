/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences_1 = function(arr) {
  // time complexity: O(n)
  // space complexity: O(n)
  let m = new Map()
  for (let i = 0; i < arr.length; i++) {
      if (!m.has(arr[i])) {
          m.set(arr[i], 1)
      } else {
          m.set(arr[i], m.get(arr[i]) + 1)
      }
  }
  let s = new Set()
  m.forEach((value, key) => {
      s.add(value)
  })
  return m.size === s.size
};

var uniqueOccurrences = function (arr) {
  
}