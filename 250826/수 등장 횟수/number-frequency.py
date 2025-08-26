n, m = map(int, input().split())
arr = list(map(int, input().split()))
nums = list(map(int, input().split()))

temp = {}

for e in arr:
    if e not in temp:
        temp[e] = 1
    else:
        temp[e] +=1


for e in nums:
    if e not in temp:
        print(0, end=' ')
    else:
        print(temp[e], end=' ')