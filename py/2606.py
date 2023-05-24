import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
v = int(input())

data = [[] for _ in range(n + 1)]
visited = [0] * (n + 1)

for i in range(v):
    start, end = map(int, input().split())
    data[start].append(end)
    data[end].append(start)


count = 1


def bfs(r):
    global count
    visited[r] = count
    queue = deque()
    queue.append(r)

    while queue:
        v = queue.popleft()
        for i in data[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = count
                count += 1


bfs(1)
print(count - 1)
