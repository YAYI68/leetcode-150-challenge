# Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

# Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

# Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
# Return k.
# Custom Judge:

# The judge will test your solution with the following code:

# int[] nums = [...]; // Input array
# int[] expectedNums = [...]; // The expected answer with correct length

# int k = removeDuplicates(nums); // Calls your implementation

# assert k == expectedNums.length;
# for (int i = 0; i < k; i++) {
#     assert nums[i] == expectedNums[i];
# }

def removeDuplicates(nums):
    if not nums:
        return 0

    i = 0  # Pointer for the unique element position

    for j in range(1, len(nums)):
        if nums[j] != nums[i]:
            i += 1
            nums[i] = nums[j]

    return i + 1


s = {2, 3, 3, 4}
print(len(s))


def dub(nums):
    if not nums:
        return 0
    i = 0
    for j, _ in enumerate(nums):
        if (nums[j] != nums[i]):
            i += 1
            nums[i] = nums[j]
    return i + 1

# leetcode solution


def removeDuplicates2(nums):
    n = len(nums)
    if (n == 0):
        return 0
    j = 1  # insert index

    for i in range(1, n):
        if (nums[i] != nums[i-1]):
            nums[j] = nums[i]
            j += 1
    return j


nums = [1, 2, 2, 3, 4, 4, 4, 5, 5]
# removeDuplicates(nums)
print(removeDuplicates2(nums))
print(nums)
