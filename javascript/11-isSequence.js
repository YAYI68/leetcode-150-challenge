// # Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// # A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// # Example 1:

// # Input: s = "abc", t = "ahbgdc"
// # Output: true
// # Example 2:

// # Input: s = "axc", t = "ahbgdc"
// # Output: false

const isSequence = (s, t) => {
  i = 0;
  j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length;
};

const isSequence2 = (s, t) => {
  let leftBond = s.length;
  let rigthBond = t.length;

  function checkSequence(left, right) {
    if (left === leftBond) {
      return true;
    }
    if (right === rigthBond) {
      return false;
    }
    if (s[left] === t[right]) {
      left++;
    }
    right++;
    return checkSequence(left, right);
  }

  return checkSequence(0, 0);
};

let s = "abc";
let t = "ahbgdc";

// s = "axc";
// t = "ahbgdc";
console.log(isSequence(s, t));
