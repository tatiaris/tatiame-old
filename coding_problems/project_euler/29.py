lb = int(input('Enter lower bound: '))
ub = int(input('Enter upper bound: '))

combs = []
for a in range(lb, ub + 1):
    for b in range(lb, ub + 1):
        combs.append(a**b)
set_combs = set(combs)
print(len(set_combs))
