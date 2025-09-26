import heapq
n, m = map(int, input().split())
arr = list(map(int, input().split()))

temp = []

for val in arr:
    heapq.heappush(temp, -val)


for i in range(m):
    heapq.heappush(temp, -(-heapq.heappop(temp)-1))

print(-temp[0])