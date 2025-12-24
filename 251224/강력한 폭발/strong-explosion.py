n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]

bomb_positions = []
for i in range(n):
    for j in range(n):
        if grid[i][j] == 1:
            bomb_positions.append((i, j))
    
num_bombs = len(bomb_positions)

bomb_shapes = [
    [(-2, 0), (-1, 0), (0, 0), (1, 0), (2, 0)],
        [(-1, 0), (1, 0), (0, 0), (0, -1), (0, 1)],
        [(-1, -1), (-1, 1), (0, 0), (1, -1), (1, 1)]
]

def in_range(x, y):
    return 0 <= x < n and 0 <= y < n

max_cnt = 0

def permutation(arr, n):
    result = []

    def dfs(path):
        if len(path) == n:
            result.append(path[:]) 
            return
        
        for i in range(len(arr)):
            path.append(i)
            dfs(path)
            path.pop()
    
    dfs([])
    return result


for types in permutation([0,1,2], num_bombs):
    visited =[[False] * n for _ in range(n)]
    cnt = 0

    for i in range(num_bombs):
        y, x = bomb_positions[i]
        shap = types[i]

        for dy, dx in bomb_shapes[shap]:
            ny, nx = y + dy, x + dx
            if in_range(nx, ny) and not visited[ny][nx]:
                visited[ny][nx] = True
                cnt += 1

    if cnt > max_cnt:
        max_cnt = cnt

print(max_cnt)