def maxProfit(nums):
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


nums = [7, 1, 5, 3, 6, 4]
print(maxProfit(nums))
