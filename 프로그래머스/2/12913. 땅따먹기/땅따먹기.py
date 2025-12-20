def solution(land):
    n = len(land)
    dp = [row[:] for row in land]

    if n == 1:
        return max(dp[0])

    for i in range(1, n):
        for j in range(4):
            best = 0
            for k in range(4):
                if j != k:
                    best = max(best, dp[i-1][k])
            dp[i][j] += best
    
    return max(dp[-1])