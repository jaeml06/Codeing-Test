n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

maxCount = 0

for i in range(n):
    for j in range(n-2):
        count = 0
        for k in range(3):
            if grid[i][j+k] == 1:
                count += 1
        maxCount = max(maxCount, count)

print(maxCount)
