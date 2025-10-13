import heapq
n, m = map(int, input().split())
points = [tuple(map(int, input().split())) for _ in range(n)]
temp = []

for x, y in points:
    heapq.heappush(temp, (x + y, x, y))


for _ in range(m):
    d, x, y = heapq.heappop(temp)
    x += 2
    y += 2
    heapq.heappush(temp, (d + 4, x, y))

_, x, y = heapq.heappop(temp)
print(x, y)