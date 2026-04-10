import sys
from collections import deque
input = sys.stdin.readline

n, m, r = map(int, input().split())
grid = [[] for _ in range(n + 1)]

for _ in range(m):
    u, v = map(int, input().split())
    grid[u].append(v)
    grid[v].append(u)

for i in range(1, n+1):
    grid[i].sort(reverse=True)
    
visited = [0] * (n + 1)
order = 1

def bfs(x):
    global order
    q = deque([x])
    visited[x] = order
    
    while q:
        temp = q.popleft()
        for nxt in grid[temp]:
            if visited[nxt] == 0:
                order += 1
                visited[nxt] = order
                q.append(nxt)
                
bfs(r)

for i in range(1, n + 1):
    print(visited[i])