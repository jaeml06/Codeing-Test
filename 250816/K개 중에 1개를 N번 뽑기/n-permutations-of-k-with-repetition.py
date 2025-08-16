# 입력: K N
K, N = map(int, input().split())

path = []

def dfs(depth):
    if depth == N:
        print(*path)
        return
    for x in range(1, K + 1):
        path.append(x)
        dfs(depth + 1)
        path.pop()

dfs(0)