def cycle_length(n):
    rest = 10
    i = 0
    while rest != 10 or i < 1:
        rest = (rest % n) * 10
        i += 1
    return i

longest = 0

for i in range(2, 1000):
    if i%2 != 0 and i%5 != 0:
        length = cycle_length(i)
        if length > longest:
            longest = length
            result = i
print(result)