# Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, 
# there are exactly 6 routes to the bottom right corner.
# How many such routes are there through a 20×20 grid?

# Solution:

import math
grid_size = 20
print(int(math.factorial(grid_size*2)/(math.factorial(grid_size)**2)))

# Answer: 137846528820



























# Advanced:

# def filter_list(list1):
#   print('started filtering')
#   for l in list1:
#     while l in list1[list1.index(l) + 1:]:
#       list1.remove(l)
#   return list1

# class unique_element:
#     def __init__(self,value,occurrences):
#         self.value = value
#         self.occurrences = occurrences

# def perm_unique(elements):
#     eset=set(elements)
#     listunique = [unique_element(i,elements.count(i)) for i in eset]
#     u=len(elements)
#     return perm_unique_helper(listunique,[0]*u,u-1)

# def perm_unique_helper(listunique,result_list,d):
#     if d < 0:
#         yield tuple(result_list)
#     else:
#         for i in listunique:
#             if i.occurrences > 0:
#                 result_list[d]=i.value
#                 i.occurrences-=1
#                 for g in  perm_unique_helper(listunique,result_list,d-1):
#                     yield g
#                 i.occurrences+=1

# grid_size = 20

# algo = []

# for i in range(grid_size):
#   algo.append(0)
#   algo.append(1)

# print(len(list(perm_unique(algo))))
