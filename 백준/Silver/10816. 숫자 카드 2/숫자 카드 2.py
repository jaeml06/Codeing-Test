n = int(input())
map1 = {}
for x in map(int, input().split()):
    if x in map1:
        map1[x] +=1
    else:
        map1[x] = 1

m = int(input())
arr = list(map(int, input().split()))

for x in arr:
    if x in map1:
        print(map1[x], end=' ')
    else:
        print(0, end=' ')