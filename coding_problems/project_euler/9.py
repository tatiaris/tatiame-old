# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
# a^2 + b^2 = c^2
# For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.

# Solution:

import math

def add_triplet(n):
  c = int(math.sqrt(n))
  for a in range(1, c):
    b = math.sqrt(n - (a*a))
    if b%1 == 0:
      triplets.append((a, int(b), c))

def find_target_sum(n):
  for triplet in triplets:
    if triplet[0] + triplet[1] + triplet[2] == n:
      return triplet[0] * triplet[1] * triplet[2]

triplets = []

for i in range(1000):
  add_triplet(i*i)

print(find_target_sum(1000))

# Answer: 31875000