import sys
read = sys.stdin.readline

arr = map(int, read().split())
sum = 0
for i in arr:
  sum += i
print(sum)