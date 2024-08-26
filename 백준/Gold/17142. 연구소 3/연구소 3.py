import sys
from collections import deque
from itertools import combinations

dx = [-1, 1, 0, 0]
dy = [0, 0, 1, -1]

def bfs(virus, left):
    queue = deque(virus)
    visited = [[False] * N for _ in range(N)]

    for x, y in virus:
        visited[y][x] = True

    time = 0
    while queue:
        if left == 0:
            return time
        time += 1
        
        for _ in range(len(queue)):
            x, y = queue.popleft()
            for i in range(4):
                nx, ny = x + dx[i], y + dy[i]
                if 0 <= nx < N and 0 <= ny < N:
                    if graph[ny][nx] != 1 and not visited[ny][nx]:
                        visited[ny][nx] = True
                        queue.append((nx, ny))
                        if graph[ny][nx] == 0:
                            left -= 1

    return sys.maxsize


read = sys.stdin.readline

N, M = map(int, read().split())

graph = [list(map(int, read().split())) for _ in range(N)]

virus_pos = []
left = 0
for i in range(N):
    for j in range(N):
        if graph[i][j] == 1:
            continue
        elif graph[i][j] == 2:
            virus_pos.append((j, i))
        else: 
            left += 1

if left == 0:
    print(0)
    sys.exit()

result = sys.maxsize
for pos in combinations(virus_pos, M):
    min_time = bfs(pos, left)
    result = min(result, min_time)

if result == sys.maxsize:
    print(-1)
else:
    print(result)