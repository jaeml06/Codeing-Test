n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

dp = [[0] * n for _ in range(n)]
dp[0][0] = grid[0][0]

for i in range(1, n):
    for j in range(i + 1):
        if j == 0:
            dp[i][j] = grid[i][j] + dp[i-1][j]
        elif j == i:
            dp[i][j] = grid[i][j] + dp[i-1][j-1]
        else:
            dp[i][j] = grid[i][j] + max(dp[i-1][j], dp[i-1][j-1])
            
print(max(dp[n-1]))