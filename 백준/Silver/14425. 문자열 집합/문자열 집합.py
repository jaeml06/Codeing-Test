import sys
read = sys.stdin.readline

n, m = map(int, read().split(' '))

S = {read() for _ in range(n)}

count = 0
for i in range(m):
  if read() in S:
    count += 1

print(count)