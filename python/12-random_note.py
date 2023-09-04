# // Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

# // Each letter in magazine can only be used once in ransomNote.

# // Example 1:

# // Input: ransomNote = "a", magazine = "b"
# // Output: false
# // Example 2:

# // Input: ransomNote = "aa", magazine = "ab"
# // Output: false
# // Example 3:

# // Input: ransomNote = "aa", magazine = "aab"
# // Output: true

def canConstruct(ransomNote, magazine):
    if (len(magazine) < len(ransomNote)):
        return False

    alpha = {}
    for c in magazine:
        alpha[c] = alpha.get(c, 0) + 1
    for char in ransomNote:
        if (char in alpha.keys() and alpha[char] >= 1):
            alpha[char] -= 1
        else:
            return False
    return True


def canConstruct2(ransomNote, magazine):
    if (len(magazine) < len(ransomNote)):
        return False

    for c in ransomNote:
        if c not in magazine:
            return False

        location = magazine.index(c)
        magazine = magazine[0:location] + magazine[location+1:]

    return True


ransomNote = "a"
magazine = "b"
print(canConstruct(ransomNote, magazine))
