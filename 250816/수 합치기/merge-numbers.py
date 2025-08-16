import sys, heapq

input = sys.stdin.readline
N = int(input().strip())
arr = list(map(int, input().split()))

if N == 1:
    print(0)
    sys.exit(0)

hq = arr[:]
heapq.heapify(hq)

cost = 0
while len(hq) > 1:
    a = heapq.heappop(hq)
    b = heapq.heappop(hq)
    s = a + b
    cost += s
    heapq.heappush(hq, s)

print(cost)