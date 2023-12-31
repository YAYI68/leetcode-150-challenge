// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
const majorityElement = (nums) => {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};

const majorityElement2 = (nums) => {
  count = new Map();
  for (const num of nums) {
    count[num] = count.get(num, 0) + 1;
    if (count[num] > Math.floor(nums.length / 2)) {
      return num;
    }
  }
  return count;
};

const majorityElement3 = (nums) => {
  let major = nums[0],
    count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) major = nums[i];
    count += major == nums[i] ? 1 : -1;
  }
  return major;
};

const majorityElement4 = (nums) => {
  let count = 0;
  let candidate = null;
  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }
    candidate === num ? count++ : count--;
  }
  return candidate;
};

const nums = [2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4];
console.log(majorityElement4(nums));
