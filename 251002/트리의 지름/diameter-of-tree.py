import sys
from collections import deque
input = sys.stdin.readline

n = int(input())
graph = [[] for _ in range(n + 1)]

for _ in range(n - 1):
    a, b, w = map(int, input().split())
    graph[a].append((b, w))
    graph[b].append((a, w))

def farthest(start: int):
    dist = [-1] * (n + 1)
    dist[start] = 0
    q = deque([start])

    while q:
        u = q.popleft()
        for v, w in graph[u]:
            if dist[v] == -1:
                dist[v] = dist[u] + w
                q.append(v)

    far_node = 1
    for i in range(1, n + 1):
        if dist[i] > dist[far_node]:
            far_node = i
    return far_node, dist[far_node]


u, _ = farthest(1)

_, diameter = farthest(u)

print(diameter)