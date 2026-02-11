def solution(triangle):
    dp = [row[:] for row in triangle]
    
    for i in range(1, len(triangle)):
        for j in range(len(triangle[i])):
            left = 0
            right = 0
            if j - 1 >= 0:
                left = dp[i-1][j-1]
            if j < len(dp[i-1]):
                right = dp[i-1][j]
            dp[i][j] = triangle[i][j] + max(left, right)
            

    return max(dp[-1])