// # Given two strings s and t, determine if they are isomorphic.

// # Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// # All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// # Example 1:

// # Input: s = "egg", t = "add"
// # Output: true
// # Example 2:

// # Input: s = "foo", t = "bar"
// # Output: false
// # Example 3:

// # Input: s = "paper", t = "title"
// # Output: true

const isomorphic = (s, t) => {
  let map1 = "";
  let map2 = "";
  for (let i = 0; i < s.length; i++) {
    map1 += s.indexOf(s[i]);
  }
  for (let j = 0; j < t.length; j++) {
    map2 += t.indexOf(t[j]);
  }
  if (map1 === map2) {
    return true;
  }
  return false;
};

// 2nd Approach
const isomorphic2 = (s, t) => {
  if (s.length != t.length) return false;
  // Create two maps for s & t strings...
  const map1 = [];
  const map2 = [];
  // Traverse all elements through the loop...
  for (let idx = 0; idx < s.length; idx++) {
    // Compare the maps, if not equal, return false...

    if (map1[s.charAt(idx)] != map2[t.charAt(idx)]) return false;
    // Insert each character if string s and t into seperate map...
    map1[s.charAt(idx)] = idx + 1;
    map2[t.charAt(idx)] = idx + 1;
  }
  return true;
};

s = "egg";
t = "add";
// let s = "abcdefghijklmnopqrstuvwxyzva";
// let t = "abcdefghijklmnopqrstuvwxyzck";

// let a = "1234567";
// let b = "78910781";
// for (let i = 0, j = 0; i < a.length, j < b.length; i++, j++) {
//   console.log(a[i]);
//   //   console.log(b[j]);
// }
console.log(isomorphic2(s, t));
