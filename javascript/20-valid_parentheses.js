// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

const validParentheses = (s) => {
  const parentheses = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const stack = [];
  for (let c of s) {
    if (c in parentheses) {
      stack.push(c);
    } else {
      if (stack.length == 0) return false;

      let opening = stack.pop();
      if (parentheses[opening] !== c) return false;
    }
  }
  console.log({ stack });
  return stack.length === 0;
};

// s = "()";
s = "()[]{}";
// s = "(]";
console.log(validParentheses(s));
// console.log(")".charCodeAt(0));
