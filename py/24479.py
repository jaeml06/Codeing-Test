import sys

sys.setrecursionlimit(10**6)
input = sys.stdin.readline

N, M, R = map(int, input().split())

data = [[] for _ in range(N + 1)]
visited = [0] * (N + 1)
count = 1

for _ in range(M):
    u, v = map(int, input().split())
    data[u].append(v)
    data[v].append(u)

for i in data:
    i.sort()


def dfs(r):
    global count

    visited[r] = count

    for i in data[r]:
        if visited[i] == 0:
            count += 1
            dfs(i)


dfs(R)
for i in range(1, N + 1):
    print(visited[i])
