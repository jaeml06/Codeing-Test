N, M = map(int, input().split())

# Please write your code here.
path = []
def dfs(start):
    if len(path) == M:
        print(' '.join(map(str, path)))
        return
    for i in range(start, N+1):
        path.append(i)
        dfs(i + 1)
        path.pop()
dfs(1)