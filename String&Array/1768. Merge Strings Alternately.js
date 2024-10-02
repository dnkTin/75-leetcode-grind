var mergeAlternately = function(word1, word2) {
  if (!word1) return word2
  if (!word2) return word1
  if (!word1 && !word2) return ''
  const length = word1.length < word2.length ? word2.length : word1.length;
  let result = '';
  for (let i = 0; i < length; i++) {
      if (word1[i]) result += word1[i]
      if (word2[i]) result += word2[i]
  }
  return result
};

```python
def mergeAlternately(self, word1: str, word2: str) -> str:
        i, j = 0 , 0
        merged = []
        while i < len(word1) and j < len(word2):
            merged.append(word1[i])
            merged.append(word2[j])
            i += 1
            j += 1
        # append remaining letter
        merged.append(word1[i:])
        merged.append(word2[j:])
        return ''.join(merged)
```

```java
class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder sb = new StringBuilder();
        int i = 0, j = 0;
        while (i < word1.length() && j < word2.length()) {
            sb.append(word1.charAt(i++));
            sb.append(word2.charAt(j++));
        }
        while (i < word1.length()) {
            sb.append(word1.charAt(i++));
        }
        while (j < word2.length()) {
            sb.append(word2.charAt(j++));
        }
        return sb.toString();
    }
}
```