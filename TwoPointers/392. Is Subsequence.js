/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  // let i => loop through s
  // let cur loop throught t
  // if we find the t[cur] == s[i] => we increase i, keep still loop until i = s.length
  // if not return false
  let i = 0
  let cur = 0
  while (cur < t.length) {
      if (s[i] === t[cur]) {
          i++
      }
      cur++
  }
  if (i === s.length) {
      return true
  }
  return false
};