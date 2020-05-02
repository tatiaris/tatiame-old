# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
# What is the 10 001st prime number?

# Solution:

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

def find():
  i = 1
  count = 0
  while count < 10001:
    i += 1
    if is_prime(i):
      count += 1
  return i

print(find())

# Answer: 104743