from collections import deque
n = int(input())
r1, c1, r2, c2 = map(int, input().split())

visited = [[-1] * n for _ in range(n)]

dx = [-2, -1, 1, 2, 2, 1, -1, -2]
dy = [1, 2, 2, 1, -1, -2, -2, -1]

def bfs():
    visited[r1-1][c1-1] = 0
    q = deque([(r1-1, c1-1)])

    while q:
        x, y = q.popleft()  
        for i in range(8):
            nx, ny = dx[i] + x, dy[i] + y
            if 0 <= nx and nx < n and 0 <= ny and ny < n and visited[ny][nx] == -1:
                visited[ny][nx] = visited[y][x] + 1
                q.append((nx, ny))

bfs()
print(visited[r2-1][c2-1])