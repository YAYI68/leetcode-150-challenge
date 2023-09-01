# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.


# Example 1:

# Input: s = "A man, a plan, a canal: Panama"
# Output: true
# Explanation: "amanaplanacanalpanama" is a palindrome.
# Example 2:

# Input: s = "race a car"
# Output: false
# Explanation: "raceacar" is not a palindrome.
# Example 3:

# Input: s = " "
# Output: true
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty str


def isPalindrome(str):
    str_trim = str.strip()
    str_lower = str_trim.lower()
    char = ""
    for i in range(len(str_lower)):
        if str_lower[i].isalnum():
            char += str_lower[i]
    return char == char[::-1]


s = "A man, a plan, a canal: Panama"
"hdh ".strip()
print(isPalindrome(s))
