# It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square.
#
# 9 = 7 + 2×1^2
# 15 = 7 + 2×2^2
# 21 = 3 + 2×3^2
# 25 = 7 + 2×3^2
# 27 = 19 + 2×2^2
# 33 = 31 + 2×1^2
#
# It turns out that the conjecture was false.
#
# What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?

from math import sqrt
import time

starttime = time.time()

def is_prime(n):
    if n == 2:
      return True
    if n == 3:
      return True
    if n % 2 == 0:
      return False
    if n % 3 == 0:
      return False
    i = 5
    w = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += w
        w = 6 - w
    return True

def get_next_ocn(n):
    n += 2
    global prime_nums
    while (is_prime(n)):
        prime_nums.append(n)
        n += 2
    return n

def is_goldbach(n):
    i = 0
    global prime_nums
    while (i < len(prime_nums) and prime_nums[i] < n):
        k = sqrt((n - prime_nums[i])/2)
        if (k == int(k)):
            return True
        i += 1
    return False

prime_nums = [2, 3, 5, 7]
ocn = 9
temp = ocn
while (True):
    ocn = get_next_ocn(ocn)
    if (not is_goldbach(ocn)):
        print(ocn)
        break

print (time.time() - starttime)
