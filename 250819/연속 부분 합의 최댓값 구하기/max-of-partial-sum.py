n = int(input())
arr = list(map(int, input().split()))

# Please write your code here.
dp = [0] * (n + 1)

dp[1] = arr[0]

ans = dp[1]

for i in range(2, n+1):
    dp[i] = max(dp[i - 1] + arr[i - 1], arr[i - 1])
    ans = max(ans, dp[i])

print(ans)