import sys
read = sys.stdin.readline

while True:
  data = sorted(map(int, read().split(' ')))
  A, B, C = data
  if A == B == C == 0:
    break
  if A ** 2 + B ** 2 == C **2:
    print('right')
  else:
    print('wrong')

