// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

const divmod = (dividend, divider) => {
  let qoutient = Math.floor(dividend / divider);
  let remainder = dividend % divider;
  return [qoutient, remainder];
};
var isHappy = function (n) {
  const getNextNum = (n) => {
    let total_sum = 0;
    while (n > 0) {
      let [num, digit] = divmod(n, 10);
      n = num;
      total_sum += digit ** 2;
    }
    return total_sum;
  };
  let seen = new Set();

  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = getNextNum(n);
  }
  return n === 1;
};

const happyNumber = (n) => {
  const getNextNum = (n) => {
    let total_sum = 0;
    while (n > 0) {
      let [num, digit] = divmod(n, 10);
      n = num;
      total_sum += digit ** 2;
    }
    return total_sum;
  };
  let slow_runner = n;
  let fast_runner = getNextNum(n);

  while (fast_runner !== 1 && slow_runner !== fast_runner) {
    slow_runner = getNextNum(slow_runner);
    fast_runner = getNextNum(getNextNum(fast_runner));
  }
  return fast_runner === 1;
};

let n = 112;

console.log(happyNumber(n));
