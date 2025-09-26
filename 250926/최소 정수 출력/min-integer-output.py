import heapq
n = int(input())
x = [int(input()) for _ in range(n)]
temp = []

# Please write your code here.
for val in x:
    if len(temp) == 0 and val == 0:
        print(0)
        continue
    if val == 0:
        print(heapq.heappop(temp))
    else:
        heapq.heappush(temp, val)


        