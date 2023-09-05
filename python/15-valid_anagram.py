# Given two strings s and t, return true if t is an anagram of s, and false otherwise.

# An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


# Example 1:

# Input: s = "anagram", t = "nagaram"
# Output: true
# Example 2:

# Input: s = "rat", t = "car"
# Output: false

def validAnagram(s: str, t: str):
    if (len(s) != len(t)):
        return False

    map1 = {}
    for ch in s:
        map1[ch] = map1.get(ch, 0) + 1
    for char in t:
        if (char in map1.keys() and map1[char] >= 1):
            print(map1)
            map1[char] -= 1
        else:
            return False
    return True

# 2nd Approach


def validAnagram2(s: str, t: str):
    if (len(s) != len(t)):
        return False

    for ch in t:
        if ch not in s:
            return False

        location = s.index(ch)
        s = s[0:location] + s[location + 1:]

    return True


# s = "anagram"
# t = "nagaram"
s = "rat"
t = "car"
print(validAnagram2(s, t))
