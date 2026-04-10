import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline
n = int(input().strip())
m = int(input().strip())

grid = [[] for _ in range(n + 1)]

for _ in range(m):
    u, v = map(int, input().split())
    grid[u].append(v)
    grid[v].append(u)
    
visited = [0] * (n + 1)
def dfs(x):
    visited[x] = 1
    for nxt in grid[x]:
        if visited[nxt] == 0:
            dfs(nxt)
dfs(1)
print(sum(visited) - 1)

