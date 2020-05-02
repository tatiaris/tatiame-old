# The prime 41, can be written as the sum of six consecutive primes:

# 41 = 2 + 3 + 5 + 7 + 11 + 13
# This is the longest sum of consecutive primes that adds to a prime below one-hundred.

# The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.

# Which prime, below one-million, can be written as the sum of the most consecutive primes?

# Solution:

primes = []
most_consecutive = 0
sum_prime = 0

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

def in_prime_list(n):
  for prime in primes:
    if prime == n:
      return True
  return False

def get_sum_index(index1, index2):
  index_sum = 0
  for i in range(index1, index2):
    index_sum += primes[i]
  return index_sum

for i in range(2, 1000000):
  if is_prime(i):
    primes.append(i)

for num in primes:
  current_sum = 0
  int_fin = len(primes)
  current_index = primes.index(num)
  len_primes = len(primes)
  for i in range(len_primes - current_index):
    current_sum = get_sum_index(current_index, len_primes - i)
    if current_sum in primes:
      if len(primes) - i - primes.index(num) > most_consecutive:
        most_consecutive = len_primes - i - current_index
        sum_prime = current_sum

print(sum_prime, most_consecutive)

# Answer: 