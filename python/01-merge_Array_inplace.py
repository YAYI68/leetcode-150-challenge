def merge(nums1, m, nums2, n):
    """
    Do not return anything, modify nums1 in-place instead.
    """

    while m > 0 and n > 0:
        if nums1[m-1] >= nums2[n-1]:
            nums1[m+n-1] = nums1[m-1]
            m -= 1
        else:
            nums1[m+n-1] = nums2[n-1]
            n -= 1
    if n > 0:
        nums1[:n] = nums2[:n]


def merge4(nums1, m, nums2, n):
    i = m - 1
    j = n - 1
    k = m + n - 1

    while j >= 0:
        if i >= 0 and nums1[i] > nums2[j]:
            nums1[k] = nums1[i]
            i -= 1
        else:
            nums1[k] = nums2[j]
            j -= 1
        k -= 1

# leetcode  solution


def merge5(nums1, m, nums2, n):
    r1 = m-1
    r2 = n-1
    w = m+n-1
    while w >= 0:
        if (r1 >= 0 and r2 >= 0):
            if (nums1[r1] > nums2[r2]):
                nums1[w] = nums1[r1]
                r1 -= 1
            else:
                nums1[w] = nums2[r2]
                r2 -= 1
        elif (r1 >= 0):
            nums1[w] = nums1[r1]
            r1 -= 1
        elif (r2 >= 0):
            nums1[w] = nums2[r2]
            r2 -= 1
        w -= 1
    return


nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3
merge5(nums1, m, nums2, n)
print(nums1)
