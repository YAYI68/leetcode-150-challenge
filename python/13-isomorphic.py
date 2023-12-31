# Given two strings s and t, determine if they are isomorphic.

# Two strings s and t are isomorphic if the characters in s can be replaced to get t.

# All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


# Example 1:

# Input: s = "egg", t = "add"
# Output: true
# Example 2:

# Input: s = "foo", t = "bar"
# Output: false
# Example 3:

# Input: s = "paper", t = "title"
# Output: true

def isomorphic(s, t):
    map1 = []
    map2 = []
    for idx in s:
        map1.append(s.index(idx))
    for idx in t:
        map2.append(t.index(idx))
    print(map1)
    print(map2)
    if map1 == map2:
        return True
    return False


s = "egg"
t = "add"
print(isomorphic(s, t))
animal = ['cat', 'cat']
for c in animal:
    print(animal.index(c))
