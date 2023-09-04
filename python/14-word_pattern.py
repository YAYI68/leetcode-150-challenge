# Given a pattern and a string s, find if s follows the same pattern.

# Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.


# Example 1:

# Input: pattern = "abba", s = "dog cat cat dog"
# Output: true
# Example 2:

# Input: pattern = "abba", s = "dog cat cat fish"
# Output: false
# Example 3:

# Input: pattern = "aaaa", s = "dog cat cat dog"
# Output: false

def wordPattern(pattern: str, s: str):
    word_array = s.split(' ')
    if (len(pattern) != len(word_array)):
        return False
    map1 = ""
    map2 = ""
    for i in range(len(pattern)):
        map1 += str(pattern.index(pattern[i]))
        map2 += str(word_array.index(word_array[i]))
    return map1 == map2


# pattern = "abba"
# s = "dog cat cat dog"

# pattern = "abba"
# s = "dog cat cat fish"

pattern = "aaaa"
s = "dog cat cat dog"

print(wordPattern(pattern, s))
