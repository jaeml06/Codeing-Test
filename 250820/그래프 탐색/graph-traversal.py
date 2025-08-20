n, m = map(int, input().split())
edges = [tuple(map(int, input().split())) for _ in range(m)]

# Please write your code here.
graph = [[0 for _ in range(n+1)] for _ in range(n+1)]

visited = [False for _ in range(n+1)]

count = 0

for v1, v2 in edges:
    graph[v1][v2] = 1
    graph[v2][v1] = 1

def dfs(v):
    global count

    for cur in range(1, n+1):
        if graph[v][cur] and not visited[cur]:
            visited[cur] = True
            count += 1
            dfs(cur)

visited[1] = True
dfs(1)

print(count)