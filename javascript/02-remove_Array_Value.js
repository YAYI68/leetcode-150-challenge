const removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i++] = nums[j];
    }
  }
  return i;
};

const removeElement2 = (nums, val) => {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};

const removeElement3 = (nums, val) => {
  let i = 0;
  let n = nums.length;
  while (i < n) {
    if (nums[i] === val) {
      nums[i] = nums[n - 1];
      n--;
    } else {
      i++;
    }
  }
  return n;
};

nums = [3, 2, 2, 3];
val = 3;
console.log(removeElement3(nums, val));
console.log(nums);
