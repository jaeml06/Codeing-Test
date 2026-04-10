import sys
import heapq

input = sys.stdin.readline
n = int(input().strip())
heap = []

for _ in range(n):
    x = int(input().strip())
    
    if x > 0:
        heapq.heappush(heap, -x)
    else:
        if heap:
            print(-heapq.heappop(heap))
        else:
            print(0)