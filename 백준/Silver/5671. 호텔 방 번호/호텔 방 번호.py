import sys
read = sys.stdin.readline

while True:
  temp = read().strip()
  if not temp :
    break
  N, M = map(int, temp.split(' '))
  count = 0
  for i in range(N, M+1):
    if len(list(str(i))) == len(set(list(str(i)))):
      count+=1

  print(count)

