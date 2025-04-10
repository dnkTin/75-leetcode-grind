def isPalindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True

def reverseString(s):
    temp = ""
    right = len(s)
    while right:
        temp += s[right - 1]
        right -= 1
    return temp

def main():
    test_cases = ["RACEACAR", "A", "ABCDEFGFEDCBA",
                  "ABC", "ABCBA", "ABBA", "RACEACAR"]
    i = 1
    for s in test_cases:
        print("Test case #", i)
        print("-" * 100)
        print("Test case with: ", s, "is Palindrome: ", isPalindrome(s))
        print("-" * 100)
        i += 1

if __name__ == "__main__":
    main()
    print(isPalindrome("abba"))
    print(reverseString('abcd'))