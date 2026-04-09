import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

n, m, r = map(int, input().split())
grid = [[] for _ in range(n + 1)]

for _ in range(m):
    u, v = map(int, input().split())
    grid[u].append(v)
    grid[v].append(u)

for i in range(1, n + 1):
    grid[i].sort(reverse=True)

visited = [0]*(n+1)
order = 1
def dfs(x):
    global order
    visited[x] = order
    
    for nxt in grid[x]:
        if visited[nxt] == 0:
            order+=1
            dfs(nxt)
dfs(r)

for i in range(1, n + 1):
    print(visited[i])
    
    