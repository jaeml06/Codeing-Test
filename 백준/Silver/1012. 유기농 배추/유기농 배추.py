import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

t = int(input())
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def dfs(grid, x, y, m, n):
    grid[y][x] = 0

    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < m and 0 <= ny < n and grid[ny][nx] == 1:
            dfs(grid, nx, ny, m, n)
    
    

for _ in range(t):
    m, n, k = map(int, input().split())
    grid = [[0] * m for _ in range(n)]
    for _ in range(k):
        x, y = map(int, input().split())
        grid[y][x] = 1
    cnt = 0
    for y in range(n):
        for x in range(m):
            if grid[y][x] == 1:
                dfs(grid, x, y, m, n)
                cnt += 1
        
    print(cnt)
   