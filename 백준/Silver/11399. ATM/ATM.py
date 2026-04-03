n = int(input())
arr = list(map(int, input().split()))
arr.sort()

pre = 0
total = 0
for x in arr:
    pre += x
    total += pre

print(total)