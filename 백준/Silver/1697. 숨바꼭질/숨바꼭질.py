from collections import deque
n, k = map(int, input().split())

visited = [-1] * 100_001

def bfs(x):
    q = deque([x])
    visited[x] = 0
    
    while q:
        cur = q.popleft()
        if cur == k:
            return visited[cur]
        
        for nxt in (cur - 1, cur + 1, cur * 2):
            if 0 <= nxt <= 100_000 and visited[nxt] == -1:
                visited[nxt] = visited[cur] + 1
                q.append(nxt)
print(bfs(n))