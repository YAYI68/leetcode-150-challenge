// # Given a pattern and a string s, find if s follows the same pattern.

// # Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

// # Example 1:

// # Input: pattern = "abba", s = "dog cat cat dog"
// # Output: true
// # Example 2:

// # Input: pattern = "abba", s = "dog cat cat fish"
// # Output: false
// # Example 3:

// # Input: pattern = "aaaa", s = "dog cat cat dog"
// # Output: false
const wordPattern = (pattern, s) => {
  let word_array = s.split(" ");
  if (pattern.length !== word_array.length) {
    return false;
  }
  let map1 = "";
  let map2 = "";
  for (let i = 0; i < pattern.length; i++) {
    map1 += pattern.indexOf(pattern[i]);
    map2 += word_array.indexOf(word_array[i]);
  }
  return map1 == map2;
};

let pattern = "abba";
let s = "dog cat cat dog";

// let pattern = "abba"
// let  s = "dog cat cat fish"

// let pattern = "aaaa";
// let s = "dog cat cat dog";

console.log(wordPattern(pattern, s));
