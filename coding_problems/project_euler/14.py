# The following iterative sequence is defined for the set of positive integers:
# n → n/2 (n is even)
# n → 3n + 1 (n is odd)
# Using the rule above and starting with 13, we generate the following sequence:
# 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
# It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
# Which starting number, under one million, produces the longest chain?
# Once the chain starts the terms are allowed to go above one million.

# Solution:

import time
starttime = time.time()

def collatz(n):
  cnt = 1
  while n != 1:
    if n%2 == 0:
      n /= 2
    else:
      n = 3*n + 1
    cnt += 1
  return cnt + 1

def find_max_sequence(limit):
  num = 1
  max_cnt = 1
  for i in range(1, limit):
    c = collatz(i)
    if c > max_cnt:
      max_cnt = c
      num = i
  return num

print(find_max_sequence(1000000))
print (time.time() - starttime)


# Answer: 837799
