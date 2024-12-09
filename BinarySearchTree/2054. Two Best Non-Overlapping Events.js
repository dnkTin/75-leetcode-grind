/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
  events.sort((a, b) => {
      return a[2] - b[2]
  })
  return events
};
let a = maxTwoEvents([[1,3,2],[4,5,2],[2,4,3]])
console.log(a[0])
console.log(a[1])
console.log(a[2])