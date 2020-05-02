# We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
#
# The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.
#
# Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital.

import time
start_time = time.time()

def get_all_combos(lst):
    if (len(lst) == 2):
        return [lst[0] + lst[1], lst[1] + lst[0]]
    else:
        all_combos = []
        for i in range(len(lst)):
             all_combos += insert_ahead(lst[0], get_all_combos(lst[1:]))
             lst.append(lst.pop(0))
        return all_combos

def insert_ahead(c, combos):
    for i in range(len(combos)):
        combos[i] = c + combos[i]
    return combos

def filter_pan(lst):
    for i in range(len(lst) - 1, -1, -1):
        if (int(lst[i][0:2]) * int(lst[i][2:5]) != int(lst[i][5:9]) and int(lst[i][0:1]) * int(lst[i][1:5]) != int(lst[i][5:9])):
            lst.pop(i)
    return lst

def get_pan_sum(lst):
    lst = list(map(str, lst))
    pan_lst = []
    for n in lst:
        pan_lst.append(int(n[5:9]))
    pan_lst = list(set(pan_lst))
    return sum(pan_lst)

digs = [str(i) for i in range(1, 10)]

pandig_nums = list(map(int, filter_pan(get_all_combos(digs))))

print('sum =', get_pan_sum(pandig_nums))
print (time.time() - start_time, "seconds")
