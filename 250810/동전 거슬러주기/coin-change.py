import sys
N, M = map(int, input().split())
coin = list(map(int, input().split()))

# Please write your code here.

dp = [sys.maxsize] * (M+1)

dp[0] = 0
dp [1] = 1

for i in range(1, M + 1):

    for j in range(N):
        if i - coin[j] >=0:
            dp[i] = min(dp[i], dp[i-coin[j]] + 1)

print(dp[M])
