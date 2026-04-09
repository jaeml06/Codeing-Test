n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

white = 0
blue = 0

def divide(x, y, size):
    global white
    global blue
    
    taget = grid[x][y]
    
    flag = True
    for i in range(x, x + size):
        for j in range(y, y + size):
            if taget != grid[i][j]:
                flag = False
                break
        if not flag:
            break
    if flag:
        if taget == 1:
            blue += 1
        else:
            white += 1
        return
    
    half = size // 2
    divide(x, y, half)
    divide(x + half, y, half)
    divide(x, y + half, half)
    divide(x + half, y + half, half)
    
divide(0, 0, n)

print(white)
print(blue)