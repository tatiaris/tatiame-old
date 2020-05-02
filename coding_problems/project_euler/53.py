def factorial(n):
    if (n == 0):
        return 1
    return n*factorial(n - 1)

def C(n, r):
    return int(factorial(n)/(factorial(r)*factorial(n - r)))

c = 0

for i in range(101):
    for j in range(i):
        if (C(i, j) > 1000000):
            c += 1

print(c)
