n, m = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(n)]

shapes = [
    [(0,0), (1,0), (1,1)],
    [(0,0), (0,1), (1,0)],
    [(0,0), (0,1), (1,1)],
    [(0,1), (1,0), (1,1)],
    [(0,0), (0,1), (0,2)],
    [(0,0), (1,0), (2,0)]
]

ans = 0
for i in range(n):
    for j in range(m):
        for shape in shapes:
            total = 0
            for dx, dy in shape:
                nx, ny = j + dx, i + dy
                if 0 <= nx < m and 0 <= ny < n:
                    total += grid[ny][nx]
                else:
                    break
                
            else:
                ans = max(ans, total)
print(ans)
