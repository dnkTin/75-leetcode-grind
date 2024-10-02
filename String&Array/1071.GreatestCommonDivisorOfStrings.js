function gcdOfStrings(str1, str2) {
  let len1 = str1.length,
    len2 = str2.length;
  let currentSubstring = "";
  for (let i = len2; i > 0; i--) {
    currentSubstring = str2.substring(0, i);
    let lengthSub = currentSubstring.length;
    if (len1 % lengthSub || len2 % lengthSub) continue;
    let factor1 = Math.floor(len1 / lengthSub),
      factor2 = Math.floor(len2 / lengthSub);
    if (
      currentSubstring.repeat(factor1) === str1 &&
      currentSubstring.repeat(factor2) === str2
    ) {
      return currentSubstring;
    }
  }
  return "";
}
console.log(gcdOfStrings("ABABAB", "ABAB"));
/*
```
  class Solution(object):
    def gcdOfStrings(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """
        len1, len2 = len(str1), len(str2)

        def isDivisor(l):
            if len1 % l or len2 % l:
                return False

            f1, f2 = len1 // l , len2 // l
            return str1[:l] * f1 == str1 and str1[:l] * f2 == str2

        for l in range(min(len1, len2), 0, -1):
            if isDivisor(l):
                return str1[:l]
        
        return ""
        
```
*/
