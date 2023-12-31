# Write a function to find the longest common prefix string amongst an array of strings.

# If there is no common prefix, return an empty string "".


# Example 1:

# Input: strs = ["flower","flow","flight"]
# Output: "fl"
# Example 2:

# Input: strs = ["dog","racecar","car"]
# Output: ""
# Explanation: There is no common prefix among the input strings.


# Using Horizontal Scanning
def longestCommonPrefix(strs):
    if len(strs) <= 0:
        return ""

    for i in range(len(strs[0])):
        c = strs[0][i]
        for j in range(1, len(strs)):
            if (i == len(strs[j]) or strs[j][i] != c):
                return strs[0][0: i]

    return strs[0]


strs = ["flower", "flow", "flight"]
str2 = [""]
print(longestCommonPrefix(str2))
