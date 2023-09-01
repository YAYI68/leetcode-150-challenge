# Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.


# Example 1:

# Input: haystack = "sadbutsad", needle = "sad"
# Output: 0
# Explanation: "sad" occurs at index 0 and 6.
# The first occurrence is at index 0, so we return 0.
# Example 2:

# Input: haystack = "leetcode", needle = "leeto"
# Output: -1
# Explanation: "leeto" did not occur in "leetcode", so we return -1.

# Using Sliding Wimndow method
def strStr(haystack, needle):
    m = len(needle)
    n = len(haystack)

    for window_start in range(n-m+1):
        for i in range(m):
            if needle[i] != haystack[window_start + i]:
                break
            if i == m-1:
                return window_start

    return -1


def strStr2(hayStack, needle):
    if (hayStack == needle):
        return 0
    n = len(hayStack)
    m = len(needle)
    for i in range(n-m+1):
        if (hayStack[i:i+m] == needle):
            return i
    return -1


haystack = "butsad"
needle = "sad"
# haystack = "leetcode"
# needle = "leeto"
# haystack = "a"
# needle = "a"
print(strStr2(haystack, needle))
