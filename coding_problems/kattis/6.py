dominant = {'A':11, 'K':4, 'Q':3, 'J':20, 'T':10, '9':14, '8':0, '7':0}
non_dominant = {'A':11, 'K':4, 'Q':3, 'J':2, 'T':10, '9':0, '8':0, '7':0}

total = 0

inp = input().split(' ')

num_cards = int(inp[0])*4
trump = inp[1]

for n in range(num_cards):
    inp = input()

    total = total + dominant[inp[0]] if inp[1] == trump else total + non_dominant[inp[0]]

print(total)
