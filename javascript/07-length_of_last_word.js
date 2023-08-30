// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal
// substring
//  consisting of non-space characters only.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
const lengthOfLastWord = (s) => {
  let trim_s = s.trim();
  lastword = trim_s.split(" ").at(-1);
  return lastword.trim().length;
};

const lengthOfLastWord2 = (s) => {
  end = s.length - 1;
  while (end > 0 && s[end] === " ") {
    end--;
  }
  beg = end;
  while (beg > 0 && s[beg] !== " ") {
    beg--;
  }
  return end - beg;
};

let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord2(s));
