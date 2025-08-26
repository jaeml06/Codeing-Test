from itertools import combinations
from collections import deque
n, k, m = map(int, input().split())
s_pos = []


grid = [list(map(int, input().split())) for _ in range(n)]
for _ in range(k):
    r, c = tuple(map(int, input().split()))
    s_pos.append((c - 1, r - 1))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

stone_pos = [
    (j, i)
    for i in range(n)
    for j in range(n)
    if grid[i][j] == 1
]
selected_stones = list(combinations(stone_pos, m))
max_cnt = 0
def in_range(x, y):
    return 0 <= x and x < n and 0 <= y and y < n


def can_go(x, y, visited, temp):
    return in_range(x, y) and not temp[y][x] and not visited[y][x]

def bfs(start_x, start_y, visited, temp):
    visited[start_y][start_x] = True
    q = deque([(start_x, start_y)])
    while q:
        # queue에서 가장 먼저 들어온 원소를 뺍니다.
        x, y = q.popleft()

        # queue에서 뺀 원소의 위치를 기준으로 4방향을 확인해봅니다.
        for i in range(4):
            nx, ny = x + dx[i], y + dy[i]

            # 아직 방문한 적이 없으면서 갈 수 있는 곳이라면
            # 새로 queue에 넣어주고 방문 여부를 표시해줍니다. 
            if can_go(nx, ny, visited, temp):
                q.append((nx, ny))
                visited[ny][nx] = True

for selected_stone in selected_stones:
    temp = [row[:] for row in grid]
    visited = [[False] * n for _ in range(n)]
    for x, y in selected_stone:
        temp[y][x] = 0

    for start_x, start_y in s_pos:
        if not visited[start_y][start_x]:
            bfs(start_x, start_y, visited, temp)
    cnt = 0
    for i in range(n):
        for j in range(n):
            if visited[i][j]:
                cnt+=1
    max_cnt = max(max_cnt, cnt)
    
print(max_cnt)

