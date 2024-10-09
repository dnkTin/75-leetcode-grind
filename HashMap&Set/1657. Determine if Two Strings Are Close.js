/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
  if (word1.length != word2.length) {
      return false
  }
  let m1 = new Map()
  let m2 = new Map()
  let s1 = new Set()
  for (let s of word1) {
      if (!m1.has(s)) {
          m1.set(s, 1)
      } else {
          m1.set(s, m1.get(s) + 1)
      }
  }
  for (let s of word2) {
      if (!m2.has(s)) {
          m2.set(s, 1)
      } else {
          m2.set(s, m2.get(s) + 1)
      }
  }
  if (m1.size !== m2.size) return false
  let count = 0
  let a1 = []
  let a2 = []
  for ([key, value] of m1) {
      a1.push(value)
      a2.push(m2.get(key))
  }
  return a1.sort().join('') == a2.sort().join('')

};