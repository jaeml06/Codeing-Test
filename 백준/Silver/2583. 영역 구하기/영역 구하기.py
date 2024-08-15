import sys
read = sys.stdin.readline
from collections import deque


M, N, K = map(int, read().split())
dx = [-1, 1, 0 ,0]
dy = [0, 0, -1, 1]


visited = [[False for _ in range(N)] for _ in range(M)]
for _ in range(K):
  x1, y1, x2, y2 = map(int, read().split())
  for i in range(x1, x2):
    for j in range(y1, y2):
      visited[j][i] = True
counts = []



def dfs(x, y):
  q = deque()
  q.append((x,y))
  visited[y][x] = True
  count = 1

  while q:
    cur_x, cur_y = q.popleft()
    for i in range(4):
      next_x = dx[i] + cur_x
      next_y = dy[i] + cur_y
      if next_x >= 0 and next_x < N and next_y>= 0 and next_y < M and visited[next_y][next_x] == False:
        visited[next_y][next_x] = True
        q.append((next_x, next_y))
        count+=1
  counts.append(count)


for i  in range(M):
  for j in range(N):
    if visited[i][j] == False:
      dfs(j, i)

print(len(counts))
print(' '.join(map(str, sorted(counts))))
