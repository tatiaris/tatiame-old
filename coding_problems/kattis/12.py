i = int(input())
s = 2
for k in range(i):
    s += s - 1
print(s**2)