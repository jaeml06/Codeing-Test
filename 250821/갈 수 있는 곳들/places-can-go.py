from collections import deque 

n, k = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]
points = [tuple(map(int, input().split())) for _ in range(k)]

visited = [[False] * n for _ in range(n)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
cnt = 0
def bfs(x, y):
    global cnt
    q = deque()
    visited[y][x] = True
    q.append((x, y))
    
    while q:
        cx, cy = q.popleft()
        cnt += 1
        for i in range(4):
            nx = dx[i] + cx
            ny = dy[i] + cy

            if 0 <= nx and nx < n and 0 <= ny and ny < n and grid[ny][nx] == 0 and not visited[ny][nx]:
                visited[ny][nx] = True
                q.append((nx, ny))

for y, x in points:
    if not visited[y-1][x-1] and grid[y-1][x-1] == 0:
        bfs(x-1, y-1)

print(cnt)
