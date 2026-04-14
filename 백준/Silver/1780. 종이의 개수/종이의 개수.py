import sys
input = sys.stdin.readline

n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

m = 0
z = 0
o = 0

def divide(x, y, size):
    global m, z, o
    
    first = grid[y][x]
    flag = True
    for i in range(y, y+ size):
        for j in range(x, x + size):
            if grid[i][j] != first:
                flag = False
                break
        if not flag:
            break
    if flag:
        if first == -1:
            m += 1
        elif first == 0:
            z += 1
        else:
            o += 1
        return
    
    third = size // 3
    for dy in range(3):
        for dx in range(3):
            divide(x + dx * third, y + dy * third, third)
divide(0, 0, n)

print(m)
print(z)
print(o)