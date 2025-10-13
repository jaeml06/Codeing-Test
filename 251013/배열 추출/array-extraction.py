import heapq
n = int(input())
x = [int(input()) for _ in range(n)]

# Please write your code here.
temp = []

for a in x:
    if a == 0:
        if temp:
            print(-heapq.heappop(temp))
        else:
            print(0)
    else:
        heapq.heappush(temp, -a)