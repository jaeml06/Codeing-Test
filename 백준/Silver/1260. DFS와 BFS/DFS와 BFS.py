import sys
from collections import deque
intput = sys.stdin.readline
sys.setrecursionlimit(10**6)

n, m, v = map(int, input().split())
grid = [[] for _ in range(n + 1)]

for _ in range(m):
    a, b = map(int, input().split())
    grid[a].append(b)
    grid[b].append(a)
    
for i in range(1, n + 1):
    grid[i].sort()

visited_dfs = [False] * (n+1)
dfs_result = []

def dfs(x):
    visited_dfs[x] = True
    dfs_result.append(x)
    
    for nxt in grid[x]:
        if not visited_dfs[nxt]:
            dfs(nxt)
dfs(v)

visited_bfs = [False] * (n+1)
bfs_result = []
q = deque([v])
visited_bfs[v] = True

while q:
    cur = q.popleft()
    bfs_result.append(cur)
    
    for nxt in grid[cur]:
        if not visited_bfs[nxt]:
            visited_bfs[nxt] = True
            q.append(nxt)

print(*dfs_result)
print(*bfs_result)