perms = [str(i) for i in range(10)]
list_of_perms = []
# generate all possible permutations of given string and add to list_of_perms variable
def all_perms (elems):
    if len(elems) < 2:
        yield elems
    else:
        for p in all_perms(elems[1:]):
            for i in range(len(elems)):
                yield p[:i] + elems[:1] + p[i:]

list_of_perms = list(all_perms(perms))
# sort the list of permutations to put the permutations in lexicographic order    
list_of_perms.sort()
# print the 1000000th permutation of the string
print(list_of_perms[1000000-1])
