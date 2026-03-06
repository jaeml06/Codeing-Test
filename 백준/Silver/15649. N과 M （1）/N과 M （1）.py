n, m = map(int, input().split())
visited = [False] * (n + 1)

def dfs(arr):
    if len(arr) == m:
        print(*arr)
    
    for i in range(1, n+1):
        if visited[i]:
            continue
        visited[i] = True
        arr.append(i)
        dfs(arr)
        visited[i] = False
        arr.pop()
dfs([])