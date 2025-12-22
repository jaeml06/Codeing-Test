import sys
def solution(x, y, n):
    dp = [sys.maxsize] * (y+1)
    dp[x] = 0
    for i in range(x, y+1):
        if dp[i] == sys.maxsize:
            continue
        
        if i + n <= y:
            dp[i + n] = min(dp[i + n], dp[i] + 1)
        if i * 2 <= y:
            dp[i * 2] = min(dp[i * 2], dp[i] + 1)
        if i * 3 <= y:
            dp[i * 3] = min(dp[i * 3], dp[i] + 1)
    return -1 if dp[y] == sys.maxsize else dp[y]