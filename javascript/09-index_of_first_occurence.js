// # Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// # Example 1:

// # Input: haystack = "sadbutsad", needle = "sad"
// # Output: 0
// # Explanation: "sad" occurs at index 0 and 6.
// # The first occurrence is at index 0, so we return 0.
// # Example 2:

// # Input: haystack = "leetcode", needle = "leeto"
// # Output: -1
// # Explanation: "leeto" did not occur in "leetcode", so we return -1.

// # Using Sliding Wimndow method
const strStr = (hayStack, needle) => {
  n = hayStack.length;
  m = needle.length;

  if (hayStack === needle) {
    return 0;
  }

  for (let i = 0; i < n - m + 1; i++) {
    if (hayStack.slice(i, i + m) == needle) {
      return i;
    }
  }
  return -1;
};

const strStr2 = (hayStack, needle) => {
  n = hayStack.length;
  m = needle.length;

  for (let window_start = 0; window_start < n - m + 1; window_start++) {
    for (let i = 0; i < m; i++) {
      if (needle[i] !== hayStack[window_start + i]) {
        break;
      }
      if (i === m - 1) {
        return window_start;
      }
    }
  }
  return -1;
};

// let haystack = "sadbutsad";
// let needle = "sad";
let haystack = "leetcode";
let needle = "leeto";
console.log(strStr2(haystack, needle));
