import heapq
import sys

input = sys.stdin.readline

t = int(input())

for _ in range(t):
    m = int(input())
    nums = []
    while len(nums) < m:
        nums.extend(map(int, input().split()))
                    
    left = []
    right = []
    result = []
    for i, num in enumerate(nums):
        if len(left) == len(right):
            heapq.heappush(left, -num)
        else:
            heapq.heappush(right, num)
        if right and -left[0] > right[0]:
            l = -heapq.heappop(left)
            r = heapq.heappop(right)
            heapq.heappush(left, -r)
            heapq.heappush(right, l)

        if i % 2 == 0:
            result.append(-left[0])

    print(len(result))
    for i in range(0, len(result), 10):
        print(*result[i:i+10])      
            
                    
                    