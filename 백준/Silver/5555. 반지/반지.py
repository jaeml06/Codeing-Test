import sys
read = sys.stdin.readline

str = read().strip()
N = int(read().strip())
count = 0
for _ in range(N):
  temp = read().strip()
  if str in temp + temp:
    count+=1
print(count)

