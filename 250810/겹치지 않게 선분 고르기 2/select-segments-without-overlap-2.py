n = int(input())
segment = []
for _ in range(n):
    a, b = map(int, input().split())
    segment.append((a, b))

dp = [0] * (n+1) 

segment.sort()
for i in range(n):
    dp[i] = 1

    for j in range(i):
        x1_i, _ = segment[i]
        _, x2_j = segment[j]

        if x2_j < x1_i:
            dp[i] = max(dp[i], dp[j] + 1)

ans = 0
for i in range(n):
    ans = max(ans, dp[i])

print(ans)




