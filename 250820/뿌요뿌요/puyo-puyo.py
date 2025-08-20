n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

visited = [[False] * n for _ in range(n)]

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

cnt = 0
def dfs(x, y, t):
    global cnt
    for i in range(4):
        nx = dx[i] + x
        ny = dy[i] + y
        if 0 <= nx and nx < n and 0 <= ny and ny < n and grid[ny][nx] == t and not visited[ny][nx]:
            visited[ny][nx] = True
            cnt+=1
            dfs(nx, ny, t)
ans_cnt = 0
max_cnt = 0
for i in range(n):
    for j in range(n):
        if not visited[i][j]:
            cnt = 1
            visited[i][j] = True
            dfs(j, i, grid[i][j])

            if cnt >= 4:
                ans_cnt += 1
            if max_cnt < cnt:
                    max_cnt = cnt

print(ans_cnt, max_cnt)