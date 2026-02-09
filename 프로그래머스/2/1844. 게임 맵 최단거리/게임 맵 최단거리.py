from collections import deque
def solution(maps):
    answer = 0
    m = len(maps[0])
    n = len(maps)
    visited = [[False] * m for _ in range(n)]
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    def bfs(x, y):
        q = deque([(x, y, 1)])
        visited[y][x] = True
        
        while q:
            cx, cy, cnt = q.popleft()
            for i in range(4):
                nx = dx[i] + cx
                ny = dy[i] + cy
                if 0 <= nx < m and 0<= ny < n and not visited[ny][nx] and maps[ny][nx] == 1:
                    visited[ny][nx] = True
                    q.append((nx, ny, cnt + 1))
                    if nx == m-1 and ny == n - 1:
                        return cnt +1
                    
        return -1
    answer = bfs(0, 0)
        
    return answer