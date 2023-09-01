# Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

# A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


# Example 1:

# Input: s = "abc", t = "ahbgdc"
# Output: true
# Example 2:

# Input: s = "axc", t = "ahbgdc"
# Output: false

def isSequence(s, t):
    m = len(s)
    n = len(t)
    if m > n:
        return False
    sequeunce = 0
    for i in range(n):
        if sequeunce <= len(s):
            if s[sequeunce] == t[i]:
                sequeunce += 1
    return m == sequeunce


def isSequence2(s, t):
    i = 0
    j = 0

    while i < len(s) and j < len(t):
        if s[i] == t[i]:
            i += 1
        j += 1

    return i == len(s)


# s = "abc"
# t = "ahbgdc"
s = "axc"
t = "ahbgdc"
print(isSequence(s, t))
