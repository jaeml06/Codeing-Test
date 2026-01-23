n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
visited = [False] * n
answer = 0

def dfs(row, total):
    global answer

    if row == n:
        answer = max(answer, total)
        return
    for col in range(n):
        if not visited[col]:
            visited[col] = True
            dfs(row + 1, total + grid[row][col])
            visited[col] = False
dfs(0,0)
print(answer)

