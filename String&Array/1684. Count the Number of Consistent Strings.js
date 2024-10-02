/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  let countNotAllowed = 0
  for (let word of words) {
      for (let ch of word) {
          if (!allowed.includes(ch)) {
              countNotAllowed++
              break
          }
      }
  }
  return words.length - countNotAllowed
};