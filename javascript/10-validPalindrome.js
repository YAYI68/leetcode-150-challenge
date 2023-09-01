// # A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// # Given a string s, return true if it is a palindrome, or false otherwise.

// # Example 1:

// # Input: s = "A man, a plan, a canal: Panama"
// # Output: true
// # Explanation: "amanaplanacanalpanama" is a palindrome.
// # Example 2:

// # Input: s = "race a car"
// # Output: false
// # Explanation: "raceacar" is not a palindrome.
// # Example 3:

// # Input: s = " "
// # Output: true
// # Explanation: s is an empty string "" after removing non-alphanumeric characters.
// # Since an empty str

const isPalindrome = (str) => {
  let filteredChar = str.replaceAll(/[^a-zA-Z0-9s]/g, "");
  let lowerChar = filteredChar.toLowerCase().trim();
  let i = 0;
  let j = lowerChar.length - 1;
  while (i <= j) {
    if (lowerChar[i] !== lowerChar[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

s = "A man, a plan, a canal: Panama";
// s = "race a car";
console.log(isPalindrome(s));
