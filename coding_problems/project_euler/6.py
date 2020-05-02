# The sum of the squares of the first ten natural numbers is,
# 1^2 + 2^2 + ... + 10^2 = 385
# The square of the sum of the first ten natural numbers is,
# (1 + 2 + ... + 10)^2 = 55^2 = 3025
# Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
# Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

# Solution:

n = 101

def sqr_sum(x):
  s = 0
  for i in range(x):
    s += i*i
  return s

def sum_sqr(x):
  s = 0
  for i in range(x):
    s += i
  return s*s

print(abs(sqr_sum(n) - (sum_sqr(n))))

# Answer: 25164150