# // Write an algorithm to determine if a number n is happy.

# // A happy number is a number defined by the following process:

# // Starting with any positive integer, replace the number by the sum of the squares of its digits.
# // Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
# // Those numbers for which this process ends in 1 are happy.
# // Return true if n is a happy number, and false if not.

# // Example 1:

# // Input: n = 19
# // Output: true
# // Explanation:
# // 12 + 92 = 82
# // 82 + 22 = 68
# // 62 + 82 = 100
# // 12 + 02 + 02 = 1
# // Example 2:

# // Input: n = 2
# // Output: false


def happyNumber(n):
    def getNextNum(n):
        total = 0
        while n > 0:
            n, digit = divmod(n, 10)
            total += digit**2
        return total
    seen = set()
    while n != 1 and n not in seen:
        seen.add(n)
        n = getNextNum(n)
    return n == 1

# 2nd Approach


def happyNumber2(n):
    def getNextNum(n):
        total = 0
        while n > 0:
            n, digit = divmod(n, 10)
            total += digit**2
        return total

    slow_runner = n
    fast_runner = getNextNum(n)

    while fast_runner != 1 and slow_runner != fast_runner:
        slow_runner = getNextNum(slow_runner)
        fast_runner = getNextNum(getNextNum(fast_runner))
    return fast_runner == 1


print(divmod(112, 10))
print(happyNumber2(19))
