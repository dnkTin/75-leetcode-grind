/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let map = {}
  for (let i = 0; i < strs.length; i++) {
      let temp = strs[i].split('').sort().join('')
      if (map.hasOwnProperty(temp)) {
          map[temp].push(strs[i])
      } else {
          map[temp] = [strs[i]]
      }
  }
  return Object.values(map)
};