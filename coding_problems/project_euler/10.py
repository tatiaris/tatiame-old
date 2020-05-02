# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
# Find the sum of all the primes below two million.

# Solution:

limit = 2000000
primes = []
total = 0

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

for i in range(2, limit):
  if is_prime(i):
    primes.append(i)

print(sum(primes, 0))

# Answer: 142913828922