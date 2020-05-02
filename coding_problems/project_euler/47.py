# The first two consecutive numbers to have two distinct prime factors are:
#
# 14 = 2 × 7
# 15 = 3 × 5
#
# The first three consecutive numbers to have three distinct prime factors are:
#
# 644 = 2² × 7 × 23
# 645 = 3 × 5 × 43
# 646 = 2 × 17 × 19.
#
# Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?

import time
start_time = time.time()

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

def has_4pf(n, f):
    global primes
    i = 0
    f_list = []
    while (len(set(f_list)) < f and i < len(primes) and primes[i] < n):
        j = n
        while (j != 1 and i < len(primes) and primes[i] < n):
            while (i < len(primes) and j/primes[i] == int(j/primes[i]) and primes[i] < n):
                k = j/primes[i]
                f_list.append(primes[i])
                j /= primes[i]
            i += 1
    if (len(set(f_list)) >= f):
        # print(n, f_list)
        return True
    return False

streak = 0
primes = [2, 3, 5, 7]
n = 10
fcs = 4

while (True):
    if (is_prime(n)):
        primes.append(n)
        streak = 0
    else:
        if (has_4pf(n, fcs)):
            streak += 1
        else:
            streak = 0
    if (streak >= fcs):
        print(n - fcs + 1)
        break
    n += 1


print (time.time() - start_time)
