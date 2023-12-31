// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// using bruce forte approach

const maxProfit = (prices) => {
  let largestProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length; j++) {
      let currentProfit = prices[j] - prices[i];
      if (currentProfit > largestProfit) {
        largestProfit = currentProfit;
      }
    }
  }
  return largestProfit;
};

const maxProfit2 = (nums) => {
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

const maxProfit3 = (prices) => {
  min_price = prices[0];
  largestProfit = 0;
  for (let price of prices) {
    if (price < min_price) {
      min_price = price;
    } else if (price - min_price > largestProfit) {
      largestProfit = price - min_price;
    }
  }
  return largestProfit;
};

nums = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(nums));
