x1, y1, x2, y2 = map(int, input().split())
a1, b1, a2, b2 = map(int, input().split())

min_x = min(x1, a1)
min_y = min(y1, b1)
max_x = max(x2, a2)
max_y = max(y2, b2)

temp = (max_x - min_x) * (max_y - min_y)
print(temp)