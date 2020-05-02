from math import factorial

cns = []
limit = int(input('enter limit: '))

def is_special(n):
    temp_sum = 0
    for a in n:
        temp_sum += factorial(int(a))
    if temp_sum == int(n):
        return True
    return False

for i in range(10, limit):
    if is_special(str(i)):
        cns.append(i)

print(sum(cns))
