n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]

temp = {}

for x, y in points:
    if x in temp:
        temp[x] = min(temp[x], y)
    else:
        temp[x] = y

ans = 0
for val in temp.values():
    ans += val
print(ans)