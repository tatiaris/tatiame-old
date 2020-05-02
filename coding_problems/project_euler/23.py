# A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
# A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

# As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

# Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.

# Solution:

import math

def get_div_sum(num):
    if num==1:
        return 1
    n = math.ceil(math.sqrt(num))
    total = 1
    divisor = 2
    while (divisor < n):
        if (num%divisor == 0):
            total += divisor
            total += num//divisor
        divisor+=1
    if n**2==num:
        total+=n
    return total

def is_abundant(num):
    if (get_div_sum(num) > num):
        return True
    else:
        return False

abundant_nums = []

for x in range (0,28124):
    if (is_abundant(x)):
        abundant_nums.append(x)
del abundant_nums[0]

sums = [0]*28124
for x in range (0, len(abundant_nums)):
    for y in range (x, len(abundant_nums)):
            sum_2_ab_nums = abundant_nums[x] + abundant_nums[y]
            if (sum_2_ab_nums<= 28123):
                if (sums[sum_2_ab_nums] == 0):
                    sums[sum_2_ab_nums] = sum_2_ab_nums

total = 0
for x in range (1,len(sums)):
    if (sums[x] == 0):
        total += x

print(total)

# Answer: 4179871