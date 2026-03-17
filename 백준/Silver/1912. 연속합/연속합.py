n = int(input())
arr = [0] + list(map(int, input().split()))

dp = [0] * (n + 1)

for i in range(1, n + 1):
    if dp[i - 1] > 0:
        dp[i] = arr[i] + dp[i - 1]
    else:
        dp[i] = arr[i]

print(max(dp[1:]))