import sys
from collections import deque

input = sys.stdin.readline

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


def bfs(data, x, y):
    queue = deque([(x, y)])
    data[y][x] = 0
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            if 0 <= nx < M and 0 <= ny < N:
                if data[ny][nx] == 1:
                    data[ny][nx] = 0
                    queue.append((nx, ny))
    return


T = int(input())

for _ in range(T):
    M, N, K = map(int, input().split())
    data = [[0] * M for _ in range(N)]
    count = 0

    for _ in range(K):
        X, Y = map(int, input().split())
        data[Y][X] = 1

    for x in range(M):
        for y in range(N):
            if data[y][x] == 1:
                bfs(data, x, y)
                count += 1

    print(count)
