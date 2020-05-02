names = open('p022_names.txt', 'r').read().split("\",\"")
names[-1] = names[-1][:-1]
names.sort()
name_sums = []

alphas = {
    'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8, 'i':9, 'j':10, 'k':11, 'l':12, 'm':13, 'n':14, 'o':15, 'p':16, 'q':17, 'r':18, 's':19, 't':20, 'u':21, 'v':22, 'w':23, 'x':24, 'y':25, 'z':26
}

def get_name_score(name, pos):
    score = 0
    for l in name:
        score += alphas[l.lower()]
    return score*pos

for i in range(len(names)):
    score = get_name_score(names[i], i+1)
    name_sums.append(score)

print(sum(name_sums))
