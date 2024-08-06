import sys
read = sys.stdin.readline

N = int(read())

pattern = '666'
num = 0
count = 0

while True:
  if pattern in str(num):
    count+=1
  if count == N:
    break
  num+=1
print(num)



  
