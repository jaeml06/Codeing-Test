import sys;
input = sys.stdin.readline
from collections import deque
N = int(input())
queue = []
for i in range(1, N+1):
    queue.append(i)
    
queue = deque(queue)
while(len(queue) != 1):
    queue.popleft()
    temp = queue.popleft()
    queue.append(temp)

print(queue.pop())


