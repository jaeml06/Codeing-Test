n, m = map(int ,input().split())

def dfs(arr, start):
    if len(arr) == m:
        print(*arr)
        return
    for i in range(start, n + 1):
        arr.append(i)
        dfs(arr, i)
        arr.pop()
        
dfs([], 1)