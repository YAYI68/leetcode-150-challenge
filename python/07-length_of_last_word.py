# Given a string s consisting of words and spaces, return the length of the last word in the string.

# A word is a maximal
# substring
#  consisting of non-space characters only.


# Example 1:

# Input: s = "Hello World"
# Output: 5
# Explanation: The last word is "World" with length 5.
# Example 2:

# Input: s = "   fly me   to   the moon  "
# Output: 4
# Explanation: The last word is "moon" with length 4.
# Example 3:

# Input: s = "luffy is still joyboy"
# Output: 6
# Explanation: The last word is "joyboy" with length 6.
def lengthOfLastWord(s):
    s_array = s.strip().split(" ")
    lastword = s_array[-1].strip()
    return len(lastword)

# option 2


def lengthOfLastWord2(s):
    end = len(s)-1
    while end > 0 and s[end] == " ":
        end -= 1
    beg = end
    while beg >= 0 and s[beg] != " ":
        beg -= 1
    return end - beg


def lengthOfLastWord3(s):
    p, length = len(s), 0
    while p > 0:
        p -= 1

        if s[p] != " ":
            length += 1

        elif length > 0 and s[p] == " ":
            return length
    return length


s = "   fly me   to   the moon  "
print(lengthOfLastWord3(s))
