from collections import deque

def solution(n, edge):
    graph = [[] for _ in range(n+1)]
    for a, b in edge:
        graph[a].append(b)
        graph[b].append(a)
    dist = [-1] * (n + 1)
    dist[1] = 0
    
    q = deque([1])
    
    while q:
        cur = q.popleft()
        for nxt in graph[cur]:
            if dist[nxt] == -1:
                dist[nxt] = dist[cur] + 1
                q.append(nxt)
    max_dist = max(dist)
    return sum(1 for d in dist if d == max_dist)