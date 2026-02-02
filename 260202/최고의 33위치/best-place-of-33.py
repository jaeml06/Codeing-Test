n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

def count_coin(x, y):
    count = 0
    for i in range(y, y + 3):
        for j in range(x, x + 3):
            if grid[i][j] == 1:
                count += 1
    return count

max_cnt = 0
for i in range(n):
    for j in range(n):
        if i + 2 >= n or j + 2 >= n:
            continue
        max_cnt = max(max_cnt, count_coin(j, i))

print(max_cnt)