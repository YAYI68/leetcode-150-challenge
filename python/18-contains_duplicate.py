# Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.


# Example 1:

# Input: nums = [1,2,3,1], k = 3
# Output: true
# Example 2:

# Input: nums = [1,0,1,1], k = 1
# Output: true
# Example 3:

# Input: nums = [1,2,3,1,2,3], k = 2
# Output: false


def containsNearbyDuplicate(nums, k):
    duplicate = {}
    for i, val in enumerate(nums):
        if val in duplicate and i-duplicate[val] <= k:
            return True
        duplicate[val] = i
    return False


def containsNearbyDuplicate2(nums, k):
    duplicate = set()
    for i, val in enumerate(nums):
        if val in duplicate:
            return True
        duplicate.add(val)
        if (len(duplicate) > k):
            duplicate.remove(nums[i-k])
    return False


# nums = [1, 0, 1, 1]
# k = 1
nums = [1, 2, 3, 1, 2, 3]
k = 2
# nums = [1, 0, 1, 1]
# k = 1
print(containsNearbyDuplicate2(nums, k))
