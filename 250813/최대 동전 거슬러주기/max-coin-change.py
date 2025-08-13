N, M = map(int, input().split())
coin = list(map(int, input().split()))

# Please write your code here.
dp = [0] * (M + 1)
for i in coin:
    dp[i] = 1

for i in range(1, M + 1):
    for j in coin:
        if i - j < 1:
            continue
        dp[i] = max(dp[i], dp[i- j] + 1)
print(dp[M])
