# Given an array nums of size n, return the majority element.

# The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


# Example 1:

# Input: nums = [3,2,3]
# Output: 3
# Example 2:

# Input: nums = [2,2,1,1,1,2,2]
# Output: 2
# First solution

def majorityElement(nums):
    nums.sort()
    return nums[len(nums)//2]


def majorityElement2(nums):
    count = {}
    for num in nums:
        count[num] = count.get(num, 0)+1
        if count[num] > len(nums)/2:
            return num


def majorityElement3(nums):
    major, count = nums[0], 0

    for i in range(0, len(nums)):
        if (count == 0):
            major = nums[i]
        if (major == nums[i]):
            count += 1
        else:
            count -= 1
    return major

# 2nd Approach


def majorityElement4(nums):
    count = 0
    candidate = None

    for num in nums:
        if count == 0:
            candidate = num
        count += (1 if num == candidate else -1)
    return candidate


nums = [2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4]
print(majorityElement4(nums))
