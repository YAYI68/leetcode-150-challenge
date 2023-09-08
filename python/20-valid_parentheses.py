# // Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

# // An input string is valid if:

# // Open brackets must be closed by the same type of brackets.
# // Open brackets must be closed in the correct order.
# // Every close bracket has a corresponding open bracket of the same type.

# // Example 1:

# // Input: s = "()"
# // Output: true
# // Example 2:

# // Input: s = "()[]{}"
# // Output: true
# // Example 3:

# // Input: s = "(]"
# // Output: false

def validParentheses(s):
    parenthese = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    stack = []
    for c in s:
        if c in parenthese:
            stack.append(c)
        else:
            if (len(stack) == 0):
                return False
            opening = stack.pop()
            if (parenthese.get(opening) != c):
                return False
    return len(stack) == 0


s = "()[]{}"
# s = "(]"
print(validParentheses(s))
