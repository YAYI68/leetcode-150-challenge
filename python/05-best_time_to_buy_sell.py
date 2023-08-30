# You are given an array prices where prices[i] is the price of a given stock on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


# Example 1:

# Input: prices = [7,1,5,3,6,4]
# Output: 5
# Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
# Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
# Example 2:

# Input: prices = [7,6,4,3,1]
# Output: 0
# Explanation: In this case, no transactions are done and the max profit = 0.

# Usning Bruce forte Approach
def maxProfit(nums):
    largestProfit = 0
    for i in range(0, len(nums)):
        for j in range(1, len(nums)):
            currentProfit = nums[j] - nums[i]
            if (currentProfit > largestProfit):
                largestProfit = currentProfit
    return largestProfit


# Using two  pointer approach with builtin max function
def maxProfit2(nums):
    left = 0
    right = 1
    max_profit = 0
    while right < len(nums):
        if nums[left] < nums[right]:
            currentProfit = nums[right]-nums[left]
            max_profit = max(currentProfit, max_profit)
        else:
            left = right
        right += 1
    return max_profit

# Using two pointer approach


def maxProfit3(nums):
    min_price = nums[0]
    max_profit = 0
    for i in range(len(nums)):
        if (nums[i] < min_price):
            min_price = nums[i]
        elif (nums[i]-min_price > max_profit):
            max_profit = nums[i]-min_price
    return max_profit


nums = [7, 1, 5, 3, 6, 4]
print(maxProfit3(nums))
