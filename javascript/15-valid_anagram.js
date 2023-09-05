// # Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// # An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// # Example 1:

// # Input: s = "anagram", t = "nagaram"
// # Output: true
// # Example 2:

// # Input: s = "rat", t = "car"
// # Output: false

const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  for (let i = 0; i < t.length; i++) {
    if (!s.includes(t[i])) return false;

    let loc = s.indexOf(t[i]);
    s = s.slice(0, loc) + s.slice(loc + 1);
  }
  return true;
};

// 2nd Approach
const validAnagram2 = (s, t) => {
  if (s.length !== t.length) return false;

  let common = new Map();
  for (let i = 0; i < s.length; i++) {
    s[i] in common ? common[s[i]]++ : (common[s[i]] = 1);
  }

  for (let j = 0; j < t.length; j++) {
    if (t[j] in common && common[t[j]] >= 1) {
      common[t[j]]--;
    } else {
      return false;
    }
  }
  return true;
};

s = "anagram";
t = "nagaram";

console.log(validAnagram2(s, t));
