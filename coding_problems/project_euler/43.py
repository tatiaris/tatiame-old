# The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order,
# but it also has a rather interesting sub-string divisibility property.
#
# Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:
#
# d2d3d4=406 is divisible by 2
# d3d4d5=063 is divisible by 3
# d4d5d6=635 is divisible by 5
# d5d6d7=357 is divisible by 7
# d6d7d8=572 is divisible by 11
# d7d8d9=728 is divisible by 13
# d8d9d10=289 is divisible by 17
# Find the sum of all 0 to 9 pandigital numbers with this property.

# def get_all_combos(lst):
#     if (len(lst) == 2):
#         return [lst[0] + lst[1], lst[1] + lst[0]]
#     else:
#         all_combos = []
#         for i in range(len(lst)):
#              all_combos += insert_ahead(lst[0], get_all_combos(lst[1:]))
#              lst.append(lst.pop(0))
#         return all_combos
#
# def insert_ahead(c, combos):
#     for i in range(len(combos)):
#         combos[i] = c + combos[i]
#     return combos
#
# def filter_pan(lst):
#     for i in range(len(lst) - 1, -1, -1):
#         if (int(lst[i][7:10])%17 != 0 or int(lst[i][6:9])%13 != 0 or int(lst[i][5:8])%11 != 0 or int(lst[i][4:7])%7 != 0 or int(lst[i][3:6])%5 != 0 or int(lst[i][2:5])%3 != 0 or int(lst[i][1:4])%2 != 0):
#             lst.pop(i)
#     return lst
#
#
# digs = [str(i) for i in range(10)]
#
# pandig_nums = list(map(int, filter_pan(get_all_combos(digs))))
#
# print('sum =', sum(pandig_nums))

import time
starttime = time.time()

pandigs = []
digs = {str(i) for i in range(10)}
divs = [13, 11, 7, 5, 3, 2, 1]

for i in range(102, 983, 17):
    n = str(i)
    if (len(set(n)) == len(n)):
        pandigs.append(n)

for d in divs:
    temp = []
    for n in pandigs:
        av_digs = list(digs - set(n))
        for a in av_digs:
            t = a + n
            if (int(t[0:3])%d == 0):
                temp.append(str(t))
    pandigs = temp

pandigs = list(map(int, pandigs))

print('sum =', sum(pandigs), len(pandigs))
print(pandigs)
print (time.time() - starttime, "seconds")

# sum = 16695334890
