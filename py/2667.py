import sys
from collections import deque

input = sys.stdin.readline

N = int(input())

data = [[] for _ in range(N)]
dCount = []
for i in range(N):
    data[i] = list(map(int, input().rstrip("\n")))
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(x, y):
    queue = deque([(x, y)])
    data[y][x] = 0
    count = 0

    while queue:
        x, y = queue.popleft()
        count += 1
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < N and 0 <= ny < N and data[ny][nx] == 1:
                queue.append((nx, ny))
                data[ny][nx] = 0

    dCount.append(count)


for i in range(N):
    for j in range(N):
        if data[i][j] == 1:
            bfs(j, i)
dCount.sort()
print(len(dCount))
for i in dCount:
    print(i)
