cards = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'T': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14}

def show_hand(h):
    s = ''
    for i in range(len(h)):
        s += str(h[i][0]) + h[i][1] + ' '
    return s

def sort_hand(h):
    for i in range(1, len(h)):
        key = h[i]
        j = i-1
        while j >= 0 and key[0] < h[j][0]:
                h[j + 1] = h[j]
                j -= 1
        h[j + 1] = key
    return h

def is_straight(h):
    s = h[0][0]
    for i in range(1, 5):
        if (h[i][0] != s + i):
            return False
    return True

def is_flush(h):
    if (h[0][1] == h[1][1] == h[2][1] == h[3][1] == h[4][1]):
        return True
    return False

def turn_to_hand(s):
    h = s.split(' ')
    h1 = [h[0], h[1], h[2], h[3], h[4]]
    h2 = [h[5], h[6], h[7], h[8], h[9]]
    for i in range(len(h1)):
        h1[i] = (cards[h1[i][0]], h1[i][1])
        h2[i] = (cards[h2[i][0]], h2[i][1])
    return [sort_hand(h1), sort_hand(h2)]

def royal_flush(h):
    if (h == [(10, 'H'), (11, 'H'), (12, 'H'), (13, 'H'), (14, 'H')]):
        return 100**10
    if (h == [(10, 'S'), (11, 'S'), (12, 'S'), (13, 'S'), (14, 'S')]):
        return 100**10
    if (h == [(10, 'D'), (11, 'D'), (12, 'D'), (13, 'D'), (14, 'D')]):
        return 100**10
    if (h == [(10, 'C'), (11, 'C'), (12, 'C'), (13, 'C'), (14, 'C')]):
        return 100**10
    return 0

def straight_flush(h):
    w = 0
    if (is_flush(h)):
        if (is_straight(h)):
            w += 100**9 + h[4][0]
    return w

def four_of_a_kind(h):
    w = 0
    if ((h[0][0] == h[1][0] == h[2][0] == h[3][0]) or (h[1][0] == h[2][0] == h[3][0] == h[4][0])):
        w += 100**8 + h[2][0]
    return w

def full_house(h):
    w = 0
    if ((h[0][0] == h[1][0] == h[2][0] and h[3][0] == h[4][0]) or (h[0][0] == h[1][0] and h[2][0] == h[3][0] == h[4][0])):
        w += 100**7 + h[2][0]
    return w

def flush(h):
    w = 0
    if (is_flush(h)):
        w += 100**6 + (10**4 * h[4][0]) + (10**3 * h[3][0]) + (10**2 * h[2][0]) + (10 * h[1][0]) + h[0][0]
    return w

def straight(h):
    w = 0
    if (is_straight(h)):
        w += 100**5 + h[4][0]
    return w

def three_of_a_kind(h):
    w = 0
    if ((h[0][0] == h[1][0] == h[2][0]) or (h[2][0] == h[3][0] == h[4][0]) or (h[1][0] == h[2][0] == h[3][0])):
        w += 100**4 + h[2][0]
    return w

def double_pair(h):
    w = 0
    if ((h[0][0] == h[1][0] and h[2][0] == h[3][0]) or (h[0][0] == h[1][0] and h[3][0] == h[4][0]) or (h[1][0] == h[2][0] and h[3][0] == h[4][0])):
        w += 100**3 + (10**2 * h[3][0]) + (10 * h[1][0]) + h[0][0] + h[2][0] + h[4][0]
    return w

def pair(h):
    w = 0
    if (h[0][0] == h[1][0]):
        w += (100**2 * h[0][0]) + (10**2 * h[4][0]) + (10 * h[3][0]) + h[2][0]
    if (h[1][0] == h[2][0]):
        w += (100**2 * h[1][0]) + (10**2 * h[4][0]) + (10 * h[3][0]) + h[0][0]
    if (h[2][0] == h[3][0]):
        w += (100**2 * h[2][0]) + (10**2 * h[4][0]) + (10 * h[1][0]) + h[0][0]
    if (h[3][0] == h[4][0]):
        w += (100**2 * h[3][0]) + (10**2 * h[2][0]) + (10 * h[1][0]) + h[0][0]
    return w

def high_card(h):
    w = (10**3 * h[4][0]) + (10**2 * h[3][0]) + (10 * h[2][0]) + h[1][0] + h[0][0]/10.0
    return w

def get_worth(h):
    w = 0
    w += royal_flush(h)
    if (w > 0): return w
    w += straight_flush(h)
    if (w > 0): return w
    w += four_of_a_kind(h)
    if (w > 0): return w
    w += full_house(h)
    if (w > 0): return w
    w += flush(h)
    if (w > 0): return w
    w += straight(h)
    if (w > 0): return w
    w += three_of_a_kind(h)
    if (w > 0): return w
    w += double_pair(h)
    if (w > 0): return w
    w += pair(h)
    if (w > 0): return w
    w += high_card(h)
    return w

def compare_hands(h1, h2):
    h1s = get_worth(h1)
    h2s = get_worth(h2)
    print('comparing hands:\t', show_hand(h1), '\t | ', show_hand(h2), '    \t --> ', h1s, '-', h2s)
    if (h1s > h2s):
        return 1
    return 2

hands = open('p054_poker.txt', 'r').read().split('\n')
if (hands[-1] == ''):
    hands.pop()

for i in range(len(hands)):
    hands[i] = turn_to_hand(hands[i])

c = 0
for i in range(len(hands)):
    print(i + 1, end = ' ')
    if (compare_hands(hands[i][0], hands[i][1]) == 1):
        c += 1

print('Player 1 wins', c, 'rounds.')
