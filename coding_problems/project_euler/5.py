# 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
# What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

# Solution:

def is_divisible(x):
  for i in range(1, 20):
    if x%i != 0:
      return False
  return True

def find():
  num = 2520
  found = False
  while not found:
    if is_divisible(num):
      return num
    num += 1

print(find())

# Answer: 232792560