def solution(m, n, puddles):
    MOD = 1_000_000_007
    answer = 0
    dp = [[0] * (m + 1) for _ in range(n+1)]
    blocked = set((x, y) for x, y in puddles)
    
    for y in range(1, n + 1):
        for x in range(1, m+1):
            if (x, y) in blocked:
                dp[y][x] = 0
                continue
            if x == 1 and y == 1:
                dp[1][1] = 1
                continue
            dp[y][x] =  (dp[y-1][x] + dp[y][x - 1]) % MOD
    return dp[n][m]