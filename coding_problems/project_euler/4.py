# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
# Find the largest palindrome made from the product of two 3-digit numbers.

# Solution:

min_num = 99
max_num = 1000

def is_palindrome(x):
  for i in range(int(len(x)/2)):
    if x[i] != x[-i-1]:
      return False
  return True

def begin():
  largest_product = 0
  for i in range(max_num, min_num, -1):
    for j in range(max_num, min_num, -1):
      if i*j > largest_product and is_palindrome(str(i*j)):
        largest_product = i*j
  return largest_product

print(begin())

# Answer: 906609