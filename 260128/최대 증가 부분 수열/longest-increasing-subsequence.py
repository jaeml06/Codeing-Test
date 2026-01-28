n = int(input())
m = [0] + list(map(int, input().split()))

# Please write your code here.
dp = [0] * (n + 1)

for i in range(1, n + 1):
    for j in range(i):
        if m[i] > m[j]:
            dp[i] = max(dp[i], dp[j] + 1)
print(max(dp))