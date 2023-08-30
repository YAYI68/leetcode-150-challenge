const removeDuplicates = (nums) => {
  if (nums.length <= 0) {
    return 0;
  }
  j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

const removeDuplicates2 = (nums) => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (j < nums.length && nums[j + 1] != nums[j]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

const nums = [1, 2, 2, 3, 4, 4, 4, 5, 5];
console.log(removeDuplicates2(nums));
console.log(nums);
