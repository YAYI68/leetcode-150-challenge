

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
