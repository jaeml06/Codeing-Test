import sys
from collections import deque

input = sys.stdin.readline
# bfs(너비우선 탐색의 기본적인 문제
# bfs는 큐를 이용해서  문제 해결
# O(N)의 수행시간 일반적인 경우 DFS보다 실행시간이 좋은편이다
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


def bfs(r):
    global count
    queue = deque()
    queue.append(r)
    visited[r] = count
    count += 1

    while queue:
        v = queue.popleft()
        for i in data[v]:
            if not visited[i]:
                queue.append(i)
                visited[i] = count
                count += 1


bfs(R)

for i in range(1, N + 1):
    print(visited[i])
