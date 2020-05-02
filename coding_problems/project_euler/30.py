bound = 355000
total_sum = -1
for i in range(1, bound):
    temp_sum = 0
    l = list(map(int, list(str(i))))
    for n in l:
        temp_sum += n**5
    if temp_sum == i:
        total_sum += i
print(total_sum)
