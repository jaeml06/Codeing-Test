import sys
n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
visited = [False] * n
answer = sys.maxsize

def dfs(idx, cnt):
    global answer
    if cnt == n // 2:
        star = 0
        link = 0
        for i in range(n):
            for j in range(i + 1, n):
                if visited[i] and visited[j]:
                    star += grid[i][j] + grid[j][i]
                elif not visited[i] and not visited[j]:
                    link += grid[i][j] + grid[j][i]
        answer = min(answer, abs(star - link))
        return
    for i in range(idx, n):
        if not visited[i]:
            visited[i] = True
            dfs(i + 1, cnt + 1)
            visited[i] = False
dfs(0,0)
print(answer)
