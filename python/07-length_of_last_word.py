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


s = "   fly me   to   the moon  "
print(lengthOfLastWord2(s))
