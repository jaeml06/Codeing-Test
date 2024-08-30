import sys
from collections import deque
read = sys.stdin.readline

N = int(read())
v = {}

for _ in range(N-1):
  a, b = map(int, read().split(' '))
  if a not in v:
    v[a] = []
  v[a].append(b)

  if b not in v:
    v[b] = []
  v[b].append(a)

parent = [0]*(N+1)
q = deque()
q.append(1)

while q:
  current = q.popleft()
  for i in v[current]:
    if parent[i] == 0:
      parent[i] = current
      q.append(i)
print('\n'.join(map(str, parent[2:])))