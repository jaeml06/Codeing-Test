n = int(input())
grid = [list(input().strip()) for _ in range(n)]

def zip(x, y, size):
    first = grid[y][x]
    same = True

    for i in range(y, y + size):
        for j in range(x, x + size):
            if grid[i][j] != first:
                same = False
                break
        if not same:
            break

    if same:
        return first

    half = size // 2
    return '(' + zip(x, y, half) + zip(x + half, y, half) + zip(x, y + half, half) + zip(x + half, y + half, half) + ')'

print(zip(0, 0, n))