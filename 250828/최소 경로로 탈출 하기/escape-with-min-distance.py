from collections import deque
n, m = map(int, input().split())
a = [list(map(int, input().split())) for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

visited = [[-1] * m for _ in range(n)]

def bfs():
    q = deque([(0, 0)])
    visited[0][0] = 0

    while q:
        x, y = q.popleft()
        for i in range(4):
            nx, ny = dx[i] + x, dy[i] + y
            if 0 <= nx and nx < m and 0 <= ny and ny < n and a[ny][nx] == 1 and visited[ny][nx] == -1:
                visited[ny][nx] = visited[y][x] + 1
                q.append((nx, ny))

bfs()
print(visited[n-1][m-1])
