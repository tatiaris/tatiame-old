def generate_primes(n):
    l = []
    prime = [True for i in range(n+1)]
    p = 2
    while (p * p <= n):
        if (prime[p] == True):
            for i in range(p * p, n+1, p):
                prime[i] = False
        p += 1
    for p in range(2, n):
        if (prime[p]):
            l.append(p)
    return l

def is_prime(n):
    if (n == 1):
        return False
    if (n == 2):
        return True
    if (n == 3):
        return True
    if (n % 2 == 0):
        return False
    if (n % 3 == 0):
        return False
    i = 5
    w = 2
    while (i * i <= n):
        if (n % i == 0):
            return False
        i += w
        w = 6 - w
    return True

def get_truncs(n):
    l = []
    for i in range(len(n)):
        l.append(int(n[i:]))
        l.append(int(n[0:len(n) - i]))
    return list(set(l))

def check_trunc(n):
    l = get_truncs(str(n))
    for i in l:
        if (not is_prime(i)):
            return False
    return True

trunc_primes = []
primes = generate_primes(1000000)[5:]

i = 0
while(len(trunc_primes) < 11 and i < len(primes)):
    if (check_trunc(primes[i])):
        trunc_primes.append(primes[i])
    i += 1

print(trunc_primes)
print(sum(trunc_primes))
