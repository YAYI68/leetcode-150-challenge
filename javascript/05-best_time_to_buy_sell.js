const maxProfit = (nums) => {
  let left = 0;
  let right = 1;
  let max_profit = 0;
  while (right < nums.length) {
    if (nums[left] < nums[right]) {
      let currentProfit = nums[right] - nums[left];
      max_profit = Math.max(currentProfit, max_profit);
    } else {
      left = right;
    }
    right++;
  }
  return max_profit;
};

nums = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(nums));
