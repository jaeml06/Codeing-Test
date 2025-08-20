import sys
sys.setrecursionlimit(10**6)

n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]



dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def dfs(x, y, k, visited):
    for i in range(4):
        nx = dx[i] + x
        ny = dy[i] + y

        if 0 <= nx and nx < m and 0 <= ny and ny < n and grid[ny][nx] > k and not visited[ny][nx]:
            visited[ny][nx] = True
            dfs(nx, ny, k, visited)

max_cnt = 0
ans_k = 1
for k in range(1, 101):
    visited = [[False] * m for _ in range(n)]
    cnt = 0
    for i in range(n):
        for j in range(m):
            if grid[i][j] > k and not visited[i][j]:
                visited[i][j] = True
                cnt+=1
                dfs(j, i, k, visited)

    if max_cnt < cnt:
        ans_k = k
        max_cnt = cnt

print(ans_k, max_cnt)
