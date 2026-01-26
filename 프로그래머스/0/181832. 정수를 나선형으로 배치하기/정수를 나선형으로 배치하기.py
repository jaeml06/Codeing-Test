def solution(n):
    answer = [[0] * n for _ in range(n)]
    
    top, bottom = 0, n - 1
    left, right = 0, n - 1
    num = 1
    
    while num <= n * n:
        for col in range(left, right + 1):
            answer[top][col] = num
            num += 1
        top += 1
        for row in range(top, bottom + 1):
            answer[row][right] = num
            num += 1
        right -= 1
        
        for col in range(right, left - 1, -1):
            answer[bottom][col] = num
            num += 1
        bottom -= 1
        
        for row in range(bottom, top - 1, -1):
            answer[row][left] = num
            num += 1
        left += 1
    return answer