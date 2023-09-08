// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false

// Naive Approach
var containsNearbyDuplicate1 = function (nums, k) {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = Math.max(i - k, 0); j < i; ++j) {
      if (nums[i] == nums[j]) return true;
    }
  }
  return false;
};
function containsNearbyDuplicate2(nums, k) {
  let duplicate = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in duplicate && Math.abs(duplicate[nums[i]] - i) <= k) {
      return true;
    }
    duplicate[nums[i]] = i;
  }
  return false;
}

const containsNearbyDuplicate3 = (nums, k) => {
  let distinct = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (distinct.has(nums[i])) return true;
    distinct.add(nums[i]);
    if (distinct.size > k) {
      distinct.delete(nums[i - k]);
    }
  }
  return false;
};

let nums = [1, 2, 3, 1];
let k = 3;

// let nums = [1, 2, 3, 1, 2, 3];
// let k = 2;

console.log(containsNearbyDuplicate3(nums, k));
