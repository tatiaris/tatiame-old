def is_prime(n):
    if n == 2:
      return True
    if n == 3:
      return True
    if n % 2 == 0:
      return False
    if n % 3 == 0:
      return False
    i = 5
    w = 2
    while i * i <= n:
        if n % i == 0:
            return False
        i += w
        w = 6 - w
    return True

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

all_pans = []
prime_pans = []
for i in range(4, 11):
    nums_av = [str(j) for j in range(1, i)]
    all_pans += get_all_combos(nums_av)

for n in all_pans:
    if is_prime(int(n)):
        prime_pans.append(int(n))

print(max(prime_pans))
