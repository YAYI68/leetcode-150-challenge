// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

const canConstruct = (ransomNote, magazine) => {
  if (magazine.length < ransomNote.length) {
    return false;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (!magazine.includes(ransomNote[i])) {
      return false;
    }
    let location = magazine.indexOf(ransomNote[i]);
    magazine = magazine.slice(0, location) + magazine.slice(location + 1);
  }
  return true;
};

const canConstruct2 = (ransomNote, magazine) => {
  const alpha = new Map();

  for (let i = 0; i < magazine.length; i++) {
    if (magazine[i] in alpha) {
      alpha[magazine[i]] += 1;
    } else {
      alpha[magazine[i]] = 1;
    }
  }
  for (let j = 0; j < ransomNote.length; j++) {
    if (ransomNote[j] in alpha && alpha[ransomNote[j]] >= 1) {
      alpha[ransomNote[j]] -= 1;
    } else {
      return false;
    }
  }

  return true;
};

// const ransomNote = "aa";
// const magazine = "ab";
let ransomNote = "aa";
let magazine = "baa";
console.log(canConstruct2(ransomNote, magazine));
