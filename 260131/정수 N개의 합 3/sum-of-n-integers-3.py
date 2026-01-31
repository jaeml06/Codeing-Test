import sys
n, k = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(n)]

total_sum = [[0] * (n + 1) for _ in range(n+1)]
for i in range(1, n + 1):
    row_sum = 0
    for j in range(1, n + 1):
        row_sum += arr[i-1][j-1]
        total_sum[i][j] = total_sum[i-1][j] + row_sum

ans = -sys.maxsize

for i in range(0, n - k + 1):
    for j in range(0, n - k + 1):
        ans = max(ans, total_sum[i + k][j + k] - total_sum[i][j + k] - total_sum[i+k][j] + total_sum[i][j])

print(ans)
