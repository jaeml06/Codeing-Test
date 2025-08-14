import sys
n, m = map(int, input().split())
A = list(map(int, input().split()))

# Please write your code here.
dp = [sys.maxsize] * (m + 1)
dp[0] = 0

# Please write your code here.
for i in range(n):
    for j in range(m, -1, -1):
        if j - A[i] >= 0:
            dp[j] = min(dp[j], dp[j - A[i]] + 1)
    
print('No') if dp[m] == sys.maxsize else print('Yes')