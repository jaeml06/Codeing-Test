n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

# Please write your code here.
dp = [[1] * n for _ in range(n)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
cells = []

def in_range(x, y):
    return 0 <= x and x < n and 0 <= y and y < n

for i in range(n):
    for j in range(n):
        cells.append((grid[i][j], i, j))
cells.sort()

for _, x, y in cells:

    for i in range(4):
        nx, ny = x + dx[i], y + dy[i]
        if in_range(nx, ny) and grid[nx][ny] > grid[x][y]:
            dp[nx][ny] = max(dp[nx][ny], dp[x][y] + 1)

print(max(map(max, dp)))