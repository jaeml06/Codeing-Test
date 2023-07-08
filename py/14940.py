import sys
from collections import deque

input = sys.stdin.readline

n, m = map(int, input().split())

data = [[] for _ in range(n)]
visited = [[-1] * m for _ in range(n)]
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

for i in range(n):
    data[i] = list(map(int, input().split()))


def bfs(x, y):
    queue = deque([(x, y)])
    visited[y][x] = 0

    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < m and 0 <= ny < n and visited[ny][nx] == -1:
                if data[ny][nx] == 1:
                    visited[ny][nx] = visited[y][x] + 1
                    queue.append((nx, ny))
                elif data[ny][nx] == 0:
                    visited[ny][nx] == 0


for i in range(n):
    for j in range(m):
        if data[i][j] == 2 and visited[i][j] == -1:
            bfs(j, i)

for i in range(n):
    for j in range(m):
        if data[i][j] == 0:
            print(0, end=" ")
        else:
            print(visited[i][j], end=" ")
    print("")
