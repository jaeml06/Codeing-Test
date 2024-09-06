import sys
read = sys.stdin.readline

N, M = map(int, read().split())

if N > 0:
  arr = list(map(int, read().split()))
  sum = sum(arr)
  count = 1
  cur_sum = 0
  for i in arr:
    if cur_sum + i > M:
      count += 1
      cur_sum = 0
    cur_sum += i
  print(count)
else:
  arr = []
  print(0)


