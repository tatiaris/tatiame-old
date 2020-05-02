def check_cancelling(tup):
    if (tup[0][0] == tup[1][0]):
        if (int(tup[0][1])/int(tup[1][1]) == int(tup[0])/int(tup[1])):
            return True
    elif (tup[0][0] == tup[1][1]):
        if (int(tup[0][1])/int(tup[1][0]) == int(tup[0])/int(tup[1])):
            return True
    elif (tup[0][1] == tup[1][0]):
        if (int(tup[0][0])/int(tup[1][1]) == int(tup[0])/int(tup[1])):
            return True
    elif (tup[0][1] == tup[1][1]):
        if (int(tup[0][0])/int(tup[1][0]) == int(tup[0])/int(tup[1])):
            return True
    return False

can_fracs = []

for i in range(11, 99):
    for j in range(i + 1, 100):
        if (i%10 != 0 and j%10 != 0 and check_cancelling((str(i), str(j)))):
            can_fracs.append((i, j))

print(can_fracs)
m = 1
for f in can_fracs:
    m *= f[0]/f[1]
print(m)
