/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
  let i = 0; 
  let result = []
  while (i < s.length) {
      if (s[i] == '*') {
          result.pop()
      } else {
          result.push(s[i])
      }
      i++
  }
  return result.join('')
};