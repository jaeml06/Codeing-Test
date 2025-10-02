from collections import deque
import sys

n = int(input())
edges = [tuple(map(int, input().split())) for _ in range(n - 1)]
graph = [[] for _ in range(n+1)]
for a, b in edges:
    graph[a].append(b)
    graph[b].append(a)

parent = [0] * (n + 1)
visited = [False] * (n+1)

q = deque([1])
visited[1] = True

while q:
    node = q.popleft()
    for next_node in graph[node]:
        if not visited[next_node]:
            parent[next_node] = node
            visited[next_node] = True
            q.append(next_node)

for i in range(2, n + 1):
    print(parent[i])
    
