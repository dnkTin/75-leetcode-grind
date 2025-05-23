class Solution:
    def convert(self, s: str, numRows: int) -> str:
        obj = {}
        # obj[0] -> obj(l)
        count = 0
        r = True
        while count < len(s):
            if r:
                for i in range(numRows):
                    if not obj[i]:
                        obj[i] = ""
                    obj[i] = obj[i].join(s[count])
                    count += 1
            else:
                for j in range(numRows - 1 , -1, -1):
                    if not obj[j]:
                        obj[j] = ""
                    obj[j] = obj[j].join(s[count])
                    count += 1
            r = not r
        result = ""
        print(obj)
        for key in obj:
            result = result.join(obj[key])
        return result
# Test
a = Solution()
a.convert("PAYPALISHIRING", 3)
"""
P  A   H     N
A P L S  I  I  G
Y    I    R
PAHNAPLSIIGYIR
"""
# Output: "PAHNAPLSIIGYIR"