from collections import deque
n, m = map(int, input().split())

grid = [list(input()) for _ in range(n)]
visited = [[0] * m for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y):
    q = deque([(x, y)])
    visited[y][x] = 1
    while q:
        cx, cy = q.popleft()
        for i in range(4):
            nx = cx + dx[i]
            ny = cy + dy[i]
            if 0 <= nx < m and 0 <= ny < n and visited[ny][nx] == 0 and grid[ny][nx] == '1':
                visited[ny][nx] = visited[cy][cx] + 1
                q.append((nx, ny))

bfs(0, 0)
print(visited[n-1][m-1])
    
    