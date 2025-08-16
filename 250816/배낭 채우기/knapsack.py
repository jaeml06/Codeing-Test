N, M = map(int, input().split())
arr = [tuple(map(int, input().split())) for _ in range(N)]


dp = [0] * (M + 1)
use = [False] * N
for i in range(N):
    for j in range(M, -1, -1):
        if j - arr[i][0] >= 0:
            dp[j] = max(dp[j], dp[j-arr[i][0]] + arr[i][1])

print(max(dp))
    
