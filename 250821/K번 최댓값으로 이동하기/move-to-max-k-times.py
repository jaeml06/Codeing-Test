from collections import deque

NOT_EXISTS = (-1, -1)

n, k = tuple(map(int, input().split()))
grid = [
    list(map(int, input().split()))
    for _ in range(n)
]

dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]

# 현재 위치
r, c = tuple(map(int, input().split()))
curr_cell = (c - 1, r - 1)

q = deque()
visited = [[False] * n for _ in range(n)]

            
def bfs():

    cx, cy = curr_cell
    visited[cy][cx] = True
    q.append(curr_cell)
    
    target_num = grid[cy][cx]
    
    # BFS 탐색을 수행합니다.
    while q:
        cx, cy = q.popleft()
        
        for i in range(4):
            nx, ny = cx + dx[i], cy + dy[i]
            
            if 0 <= nx and nx < n and 0 <= ny and ny < n and grid[ny][nx] < target_num and not visited[ny][nx]:
                q.append((nx, ny))
                visited[ny][nx] = True
            

def need_update(best_pos, new_pos):
    if best_pos == NOT_EXISTS:
        return True
    
    target_x, target_y = best_pos
    nx, ny = new_pos
    
    # 숫자, -행, -열 순으로 더 큰 곳이 골라져야 합니다.
    return (grid[ny][nx], -ny, -nx) > \
           (grid[target_y][target_x], -target_y, -target_x)


def move():
    global curr_cell
    
    global visited
    visited = [[False] * n for _ in range(n)]

    bfs()
    

    best_pos = NOT_EXISTS
    for i in range(n):
        for j in range(n):
            if not visited[i][j] or (j, i) == curr_cell:
                continue
            
            new_pos = (j, i)
            if need_update(best_pos, new_pos):
                best_pos = new_pos

    # Step3. 위치를 이동합니다.
    
    # 만약 움직일 위치가 없다면 종료합니다.
    if best_pos == NOT_EXISTS:
        return False
    # 움직일 위치가 있다면 이동합니다.
    else:
        curr_cell = best_pos
        return True

for _ in range(k):
    is_moved = move()
    if not is_moved:
        break

final_x, final_y = curr_cell
print(final_y + 1, final_x + 1)
