# Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

# Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

# Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
# Return k.
# Custom Judge:

# The judge will test your solution with the following code:

# int[] nums = [...]; // Input array
# int val = ...; // Value to remove
# int[] expectedNums = [...]; // The expected answer with correct length.
#                             // It is sorted with no values equaling val.

# int k = removeElement(nums, val); // Calls your implementation

# assert k == expectedNums.length;
# sort(nums, 0, k); // Sort the first k elements of nums
# for (int i = 0; i < actualLength; i++) {
#     assert nums[i] == expectedNums[i];
# }
def removeElement(nums, val):
    i = 0
    for j, num in enumerate(nums):
        if (num != val):
            nums[i] = nums[j]
            i += 1
    return i

# 2 approach


def removeElement2(nums, val):
    i = 0
    n = len(nums)

    while i < n:
        if (nums[i] == val):
            nums[i] = nums[n-1]
            n -= 1
        else:
            i += 1
    return n


nums = [3, 2, 2, 3]
val = 3
print(removeElement2(nums, val))
print(nums)
print("hello")
