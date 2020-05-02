# If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are exactly three solutions for p = 120.
#
# {20,48,52}, {24,45,51}, {30,40,50}
#
# For which value of p ≤ 1000, is the number of solutions maximised?

from math import sqrt
def get_solutions(p):
    s = 0
    return s

def is_right_triangle(a, b):
    c = sqrt(a**2 + b**2)
    if (c%1 == 0):
        if (a + b + c <= 1000):
            return True
    return False

# def arrange(a, b, c):
#     if ()

score = [[] for i in range(1001)]

for a in range(1, 1000):
    for b in range(1, 1000 - a):
        if (is_right_triangle(a, b)):
            c = int(sqrt(a**2 + b**2))
            t = tuple(sorted([a, b, c]))
            if (not t in score[a+b+c]):
                score[a + b + c].append(t)

c = 0
t = 0
for i in range(len(score)):
    if (len(score[i]) > c):
        c = len(score[i])
        t = i
print(t)
