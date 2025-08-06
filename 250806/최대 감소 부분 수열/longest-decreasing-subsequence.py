n = int(input())
m = list(map(int, input().split()))

# Please write your code here.
dp = [1] * n
dp[0] = 1
for i in range(1, n):
    for j in range(0, i):
        if m[j] > m[i]:
            dp[i] = max(dp[i], dp[j] + 1)
        

print(max(dp))



