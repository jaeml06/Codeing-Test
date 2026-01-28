n = int(input())
A = [list(map(int, input().split())) for _ in range(n)]

INF = 10**15
visited = [False] * n
best = INF

def dfs(cur, cnt, cost_sum):
    global best
    if cost_sum >= best:
        return

    if cnt == n:
        if A[cur][0] != 0:
            best = min(best, cost_sum + A[cur][0])
        return
    for nxt in range(n):
        if visited[nxt]:
            continue
        if A[cur][nxt] == 0:
            continue
        
        visited[nxt] = True
        dfs(nxt, cnt + 1, cost_sum + A[cur][nxt])
        visited[nxt] = False

visited[0] = True
dfs(0, 1, 0)
print(best)