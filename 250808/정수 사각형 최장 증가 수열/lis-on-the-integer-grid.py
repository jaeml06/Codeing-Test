n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

# Please write your code here.
dp = [[1] * n for _ in range(n)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(n):
    for j in range(n):
        for k in range(4):
            nx = j + dx[k]
            ny = i + dy[k]
            if 0<=nx and nx < n and 0<=ny and ny < n and grid[i][j] > grid[ny][nx]:
                dp[i][j] = max(dp[i][j], dp[ny][nx] + 1)

print(max(map(max, dp)))