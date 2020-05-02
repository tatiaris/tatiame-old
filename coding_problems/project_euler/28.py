s = int(input('Enter length of square grid: '))
grid = [[0]*s for i in range(s)]

def turn_right(y, x):
    if y == 1 and x == 0:
        return (0, -1)
    elif y == 0 and x == -1:
        return (-1, 0)
    elif y == -1 and x == 0:
        return (0, 1)
    else:
        return (1, 0)

def is_zero_right(y, x, dir):
    if grid[y + dir[0]][x + dir[1]] == 0:
        return True
    return False

def sum_diagonal(g):
    s = -1
    for i in range(len(g)):
        s += g[i][i] + g[i][-i-1]
    return s

x = int(s/2)
y = int(s/2)
dir = (-1, 0)
n = 1

for i in range(s**2 + 1):
    if is_zero_right(y, x, turn_right(dir[0], dir[1])):
        dir = turn_right(dir[0], dir[1])
    grid[y][x] = n
    if i < s**2 - 1:
        y += dir[0]
        x += dir[1]
        n += 1

print(sum_diagonal(grid))
