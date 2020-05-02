# The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1); so the first ten triangle numbers are:

#                                   1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

# By converting each letter in a word to a number corresponding to its alphabetical position and adding these 
# values we form a word value. For example, the word value for SKY is 19 + 11 + 25 = 55 = t10. If the word value is a 
# triangle number then we shall call the word a triangle word.

# Using words.txt (right click and 'Save Link/Target As...'), a 16K text file containing nearly two-thousand common English words, 
# how many are triangle words?

alphs = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 'q':17, 
'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26}

words = open('p042_words.txt', 'r').read().split(',')
for i in range(len(words)):
    words[i] = words[i][1:-1]

def is_tw(w):
    nw = 0
    for l in w:
        nw += alphs[l]
    for i in range(nw):
        if i**2 + i == 2*nw:
            return True
    return False

a = 0
for w in words:
    if is_tw(w.lower()):
        a += 1

print(a+1)