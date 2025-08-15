import sys
input = sys.stdin.readline

n = int(input().strip())
jobs = [tuple(map(int, input().split())) for _ in range(n)]  # (s, e, pay)

jobs.sort(key=lambda x: x[1])

dp = [0] * (n + 1)

for i in range(1, n + 1):
    s_i, e_i, w_i = jobs[i - 1]

    best = w_i
    for j in range(i - 1, 0, -1):
        if jobs[j - 1][1] < s_i:
            best = w_i + dp[j]
            break

    dp[i] = max(dp[i - 1], best)

print(dp[n])