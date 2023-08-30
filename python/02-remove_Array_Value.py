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
