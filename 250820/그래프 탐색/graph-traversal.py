n, m = map(int, input().split())
edges = [tuple(map(int, input().split())) for _ in range(m)]

# Please write your code here.
graph = [[] for _ in range(n+1)]

visited = [False for _ in range(n+1)]

count = 0

for v1, v2 in edges:
    graph[v1].append(v2)
    graph[v2].append(v1)

def dfs(v):
    global count

    for cur in graph[v]:
        if not visited[cur]:
            visited[cur] = True
            count += 1
            dfs(cur)

visited[1] = True
dfs(1)

print(count)