function validAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  return s.split('').sort().join('') === t.split('').sort().join('')
}


var isAnagram = function (s, t) {
  if (s.length !== t.length) {
      return false;
  }
  const counter = new Array(26);
  counter.fill(0)
  const charCodeAtA = 'a'.charCodeAt();
  for (let i = 0; i < s.length; i++) {
    const currentSCharCode = s[i].charCodeAt()
    const currentTCharCode = t[i].charCodeAt()
    counter[currentSCharCode - charCodeAtA]++
    counter[currentTCharCode - charCodeAtA]--
  }
  console.log(counter)
  for (let i = 0; i < counter.length; i++) {
      if (counter[i] !== 0) {
          return false
      }
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram"))