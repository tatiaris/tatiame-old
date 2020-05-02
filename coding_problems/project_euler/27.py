limit = int(input('Enter the limit: '))
max_consecutive = 0
max_a = 0
max_b = 0

def is_prime(n):
    if n==2 or n==3: return True
    if n%2==0 or n<2: return False
    for i in range(3,int(n**0.5)+1,2):
        if n%i==0:
            return False
    return True

for a in range(-limit, limit, 1):
    for b in range(-limit, limit + 1, 1):
        i = 0
        while is_prime((i**2) + (a*i) + b):
            i += 1
        if i > max_consecutive:
            max_consecutive = i+1
            max_a = a
            max_b = b
            
print(max_a, max_b, max_consecutive)
print(max_a*max_b)
