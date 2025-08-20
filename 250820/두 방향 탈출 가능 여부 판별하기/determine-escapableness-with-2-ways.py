n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]
visited = [[False for _ in range(m)] for _ in range(n)]


dx = [1, 0]
dy = [0, 1]

def dfs(x, y):
    for i in range(2):
        curX = dx[i] + x
        curY = dy[i] + y
        if 0 <= curX and curX < m and 0<= curY \
        and curY < n and grid[curY][curX] == 1 \
        and not visited[curY][curX]:
            visited[curY][curX] = True
            dfs(curX, curY)


visited[0][0] = True
dfs(0, 0)

print(1 if visited[n-1][m-1] else 0)
