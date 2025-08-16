n = int(input())
profit = list(map(int, input().split()))

dp = [0] * (n + 1)
for i in range(1, n+1):
    for idx, p in enumerate(profit):
        if i - (idx+1) >= 0:
            dp[i] = max(dp[i], dp[i - (idx + 1)] + p)
print(dp[n])