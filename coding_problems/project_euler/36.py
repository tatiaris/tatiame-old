d_palindromes = []
lim = int(input('enter limit: '))

def is_palindrome(x):
    x = str(x)
    for i in range(int(len(x)/2)):
        if x[i] != x[-i-1]:
            return False
    return True

def is_d_palindrome(n):
    if is_palindrome(n) and is_palindrome(bin(n)[2:]):
        return True
    return False

for i in range(lim):
    if is_d_palindrome(i):
        d_palindromes.append(i)

print(sum(d_palindromes))
