limit = int(input('Enter limit: '))
cnt = 0
set_circs = []

def is_prime(n):
    if n==2 or n==3: return True
    if n%2==0 or n<2: return False
    for i in range(3,int(n**0.5)+1,2):
        if n%i==0:
            return False
    return True

def rotate_num(k):
    k_str = str(k)
    fin_str = ''
    temp = k_str[0]
    for i in range(len(k_str)-1):
        fin_str += k_str[i+1]
    fin_str += temp
    return int(fin_str)

def get_rots(n):
    l = len(str(n))
    if l == 1:
        return [n]
    else:
        lst = [n]
        for i in range(l-1):
            n = rotate_num(n)
            lst.append(n)
        return lst

def is_circular(n):
    list_rots = get_rots(n)
    for x in list_rots:
        if '0' in str(x):
            return False
        if not is_prime(x):
            return False
    return True

for i in range(2, limit):
    if is_circular(i):
        set_circs.append(i)

print(len(set_circs))
