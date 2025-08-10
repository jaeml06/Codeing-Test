from itertools import combinations
n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]
x = [p[0] for p in points]
y = [p[1] for p in points]

# Please write your code here.
arr =   combinations(points, 3)

max_area = 0
for val in arr:
    [(x1, y1), (x2, y2), (x3, y3)] = val
    if (x1 == x2 or x2 == x3 or x3 == x1) and \
        (y1 == y2 or y2 == y3 or y3 == y1):
        max_area = max(max_area, (max(x1, x2, x3)-min(x1, x2, x3)) * (max(y1, y2, y3)-min(y1, y2, y3)) )

print(max_area)