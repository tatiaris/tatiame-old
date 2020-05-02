# The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are permutations of one another.
# There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.
# What 12-digit number do you form by concatenating the three terms in this sequence?

# Solution:

def is_prime(num):
    if (num == 1):
        return False
    if (num == 2):
        return True
    if (num%2 == 0):
        return False
    i = 3
    while(i<((num**0.5)+1)):
        if num%i==0:
            return False
        i += 2
    return True

def is_perm(n1, n2):
    n1_chars = [int(i) for i in str(n1)]
    n2_chars = [int(i) for i in str(n2)]
    for n in n1_chars:
        if n in n2_chars:
            n2_chars.remove(n)
        else:
            return False
    return True

def optimize_arr(arr):
    list_difs = []
    list_nums_difs = []
    modes = []
    for i in range(len(arr)-1, -1, -1):
        for j in range(i):
            list_difs.append(arr[i] - arr[j])
            list_nums_difs.append(arr[i])
    for i in range(len(list_difs)-1):
        if list_difs[i] in list_difs[i+1:]:
            modes.append((list_nums_difs[i], list_difs[i]))
    if modes == []:
        opm_arr = arr
    else:
        opm_arr = []
        while len(opm_arr) < 3:
            if len(modes) == 0:
                opm_arr = arr
                break
            if modes[0][0]-(2*modes[0][1]) in arr:
                opm_arr = [modes[0][0], modes[0][0]-modes[0][1],  modes[0][0]-modes[0][1]-modes[0][1]]
            modes.pop(0)
    return opm_arr

def is_dif_same(nlist):
    dif = nlist[1]-nlist[0]
    for i in range(len(nlist)-1):
        if nlist[i+1] - nlist[i] != dif:
            return False
    return True

prime_list = []
seqs = []

for i in range(1000, 10000):
    if is_prime(i):
        prime_list.append(i)

for prime1 in prime_list:
    seq_list = []
    for prime2 in prime_list:
        if is_perm(prime1, prime2):
            seq_list.append(prime2)
    if len(seq_list) >= 3:
        op = optimize_arr(seq_list)
        if len(op) > 0 and is_dif_same(op) and op not in seqs:
            seqs.append(op)

print(seqs)

# Answer: 296962999629
