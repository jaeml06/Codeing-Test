import sys
n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]
x = [p[0] for p in points]
y = [p[1] for p in points]

min_dist = sys.maxsize
for i in range(n):
    for j in range(i+1, n):
        min_dist = min(min_dist, (x[i] - x[j])**2 + (y[i] - y[j])**2)

print(min_dist)