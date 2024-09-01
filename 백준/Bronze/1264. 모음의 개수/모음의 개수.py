import sys
read = sys.stdin.readline

while True:
  str = read().strip()
  if str == '#':
    break

  temp = 'aeiou'
  count = 0
  for char in str:
    if char.lower() in temp:
      count+=1
  print(count)

