from collections import deque

n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]
visited = [[False for _ in range(m)] for _ in range(n)]


dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

q = deque()

def bfs():
    while q:
        x, y = q.popleft()

        for i in range(4):
            curX = dx[i] + x
            curY = dy[i] + y
            if 0 <= curX and curX < m and 0<= curY \
            and curY < n and grid[curY][curX] == 1 \
            and not visited[curY][curX]:
                visited[curY][curX] = True
                q.append((curX, curY))


q.append((0, 0))
visited[0][0] = True
bfs()

print(1 if visited[n-1][m-1] else 0)
