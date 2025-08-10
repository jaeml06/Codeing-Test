import sys
n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]
x = [p[0] for p in points]
y = [p[1] for p in points]


ans = sys.maxsize
for i in range(n):
    
    min_x, min_y = sys.maxsize, sys.maxsize
    max_x, max_y = 1, 1
    for j, (x, y) in enumerate(points):
        if j == i:
            continue
        min_x, min_y = min(min_x, x), min(min_y, y)
        max_x, max_y = max(max_x, x), max(max_y, y)
    
    ans = min(ans, (max_x - min_x) * (max_y - min_y))

print(ans)
        
