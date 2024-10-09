/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels_1 = function(s, k) {
  let vowels = ['a', 'e', 'i', 'o', 'u']
  const countVowel = (s) => {
      let count = 0
      for (let char of s) {
          if (vowels.includes(char)) {
              count++
          }
      }
      return count
  }
  let windowSliding = s.substring(0, k)
  let maxVowel = countVowel(windowSliding)

  for (let i = k; i < s.length; i++) {
      windowSliding = windowSliding.substring(1) + s[i]
      let currentCountVowel = countVowel(windowSliding)
      maxVowel = Math.max(currentCountVowel, maxVowel)
  }
  return maxVowel

};


var maxVowels = function(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let windowSliding = s.substring(0, k)
  let maxVowel = 0
  let currentCountVowel = 0

  // count vowels in the first window
  for (let i = 0; i < k; i++) {
    if (vowels.has(windowSliding[i])) {
      currentCountVowel++
    }
  }
  maxVowel = Math.max(currentCountVowel, maxVowel)

  for (let i = k; i < s.length; i++) {
      // check if the next character is vowel 
      if (vowels.has(s[i])) {
        currentCountVowel++
      }
      // check if the first character in the window is vowel and remove it
      if (vowels.has(s[i - k])) {
        currentCountVowel--
      }
      maxVowel = Math.max(currentCountVowel, maxVowel)
  }
  return maxVowel

};
console.log(maxVowels("abciiidef", 3)) // 3