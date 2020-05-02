# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

# Solution:

x = 3
y = 5
total_sum = 0
for i in range(1000):
  if i%x == 0 or i%y == 0:
    total_sum += i
print(total_sum)

# Answer: 233168