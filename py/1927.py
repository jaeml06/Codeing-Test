import sys
import heapq

input = sys.stdin.readline

N = int(input())

data = [int(input()) for _ in range(N)]
list = []

for i in range(N):
    if data[i] == 0:
        if len(list):
            print(heapq.heappop(list))
        else:
            print(0)
    else:
        heapq.heappush(list, data[i])
