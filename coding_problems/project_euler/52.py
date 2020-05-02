# It can be seen that the number, 125874, and its double, 251748, contain exactly the same digits, but in a different order.

# Find the smallest positive integer, x, such that 2x, 3x, 4x, 5x, and 6x, contain the same digits.

def contain_same_digits(j, k):
    j, k = set(list(str(j))), set(list(str(k)))
    if (j == k):
        return True
    return False

n = 1
while (True):
    if (contain_same_digits(n, 2*n) and contain_same_digits(n, 3*n) and contain_same_digits(n, 4*n) and contain_same_digits(n, 5*n) and contain_same_digits(n, 6*n)):
        break
    n += 1
print(n)
