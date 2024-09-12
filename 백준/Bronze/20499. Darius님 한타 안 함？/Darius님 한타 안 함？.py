import sys
read = sys.stdin.readline

K, D, A = map(int, read().split('/'))
if(K + A < D or D== 0):
  print('hasu')
else:
  print('gosu')