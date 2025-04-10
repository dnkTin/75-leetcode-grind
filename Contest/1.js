/**
 * @param {number[][]} events
 * @return {number}
 */
var buttonWithLongestTime = function(events) {
  let hash = {}
  let previousTime = 0
  for (let i = 0; i < events.length; i++) {
      hash[events[i][0]] = Math.max(hash[events[i][0]] || 0, events[i][1] - previousTime)
      previousTime = events[i][1]
  }
  // {1: 6, 2: 3, 3: 4}
  let max = -1
  let result = -1
  for (let key in hash) {
      if (hash[key] > max) {
          max = hash[key]
          result = key
      }
  }
  return result
};
console.log(buttonWithLongestTime([[1,2],[2,5],[3,9],[1,15]]))