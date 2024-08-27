import sys
from collections import deque
from itertools import combinations

read = sys.stdin.readline

N = int(read())

arr = list(map(int, read().split(' ')))

arr.sort()
visited = [False for _ in range(N)]

count = 0
last_num = 0
for idx, val in enumerate(arr):
  if last_num < val and visited[idx] == False:
    count+=1
    visited[idx] = True
    last_num = val

last_num = 0
for idx, val in enumerate(arr):
  if last_num < val and visited[idx] == False:
    count+=1
    visited[idx] = True
    last_num = val

print(count)