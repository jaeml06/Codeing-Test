import sys
N, M = map(int, input().split())
grid = [input() for _ in range(N)]

min_paint = sys.maxsize
for i in range(N - 7):
    for j in range(M - 7):
        temp_w = 0
        temp_b = 0
        
        for y in range(i, i + 8):
            for x in range(j, j + 8):
                if (y + x) % 2 == 0:
                    if grid[y][x] != 'W':
                        temp_w += 1
                    if grid[y][x] != 'B':
                        temp_b+=1
                else:
                    if grid[y][x] != 'B':
                        temp_w += 1
                    if grid[y][x] != 'W':
                        temp_b += 1
        min_paint = min(min_paint, temp_w, temp_b)
        
        
print(min_paint)