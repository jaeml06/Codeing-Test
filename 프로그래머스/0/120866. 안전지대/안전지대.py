def solution(board):
    n = len(board)
    danger = [[0]*n for _ in range(n)]
    directions = [
        (-1,-1), (-1,0), (-1,1),
        (0,-1),  (0,0),  (0,1),
        (1,-1),  (1,0),  (1,1)
    ]
    
    for i in range(n):
        for j in range(n):
            if board[i][j] == 1:
                for dx, dy in directions:
                    nx = dx + j
                    ny = dy + i
                    if 0 <= nx < n and 0 <= ny < n:
                        danger[ny][nx] = 1
    
    cnt = 0
    for i in range(n):
        for j in range(n):
            if danger[i][j] == 0:
                cnt += 1
    return cnt
                
    
    return answer