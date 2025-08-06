n = int(input())
arr = list(map(int, input().split()))


dp = [-1] * n
dp[0] = 0

for i in range(1, n):
    for j in range(0, i):
        if dp[j] == -1:
            continue
        elif j + arr[j] >= i:
            dp[i] = max(dp[i], dp[j] + 1)

print(max(dp))