import heapq

n = int(input())
arr = list(map(int, input().split()))

h = []
for val in arr:
    heapq.heappush(h, -val)

while len(h) > 1:
    a = -heapq.heappop(h)
    b = -heapq.heappop(h)
    if a - b != 0:
        heapq.heappush(h, -(a - b))

if not h:
    print(-1)
else:
    print(-h[0])