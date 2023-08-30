def romanToInt(s):
    roman = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1}
    total = 0
    for i in range(0, len(s)-1):
        if (roman[s[i]] < roman[s[i]]):
            total -= roman[s[i]]
        else:
            total += roman[s[i]]
    return total + roman[s[-1]]


s = "LVIII"
print(romanToInt(s))
