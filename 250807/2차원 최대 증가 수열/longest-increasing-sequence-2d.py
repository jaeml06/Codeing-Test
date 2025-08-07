n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

# Please write your code here.
dp = [[0] * m for _ in range(n)];

dp[0][0] = 1
for i in range(1, n):
    for j in range(1, m):
        for k in range(0, i):
            for l in range(0, j):
                if dp[k][l] == 0:
                    continue;
                if grid[k][l] < grid[i][j]:
                    dp[i][j] = max(dp[i][j], dp[k][l] + 1)

answer = 0
for i in range(n):
    for j in range(m):
        answer = max(answer, dp[i][j])

print(answer)
