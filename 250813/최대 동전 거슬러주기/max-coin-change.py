import sys
N, M = map(int, input().split())
coin = list(map(int, input().split()))

# Please write your code here.
dp = [-sys.maxsize] * (M + 1)
dp[0] = 0

for i in range(1, M + 1):
    for j in coin:
        if i - j >= 0 and dp[i - j] != -sys.maxsize:
            dp[i] = max(dp[i], dp[i- j] + 1)
print(dp[M] if dp[M] != 0 else -1)
