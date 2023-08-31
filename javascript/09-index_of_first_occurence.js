const strStr = (hayStack, needle) => {
  let firstChar = needle[0];
  let firstOccur = hayStack.indexOf(firstChar);
  if (firstOccur !== -1) {
    if (hayStack.slice(firstOccur, firstOccur + needle.length) === needle) {
      return firstOccur;
    } else {
      return -1;
    }
  } else {
    return -1;
  }
};

let haystack = "sadbutsad";
let needle = "sad";
// let haystack = "leetcode";
// let needle = "leeto";
console.log(strStr(haystack, needle));
