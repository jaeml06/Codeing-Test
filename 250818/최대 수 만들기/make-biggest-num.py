from functools import cmp_to_key
n = int(input())
arr = [int(input()) for _ in range(n)]

def compare(x, y):
    temp1 = int(str(x) + str(y))
    temp2 = int(str(y) + str(x))
    if temp1 > temp2:
        return -1
    if temp2 > temp1:
        return 1
    return 0

arr.sort(key=cmp_to_key(compare))

for val in arr:
    print(val, end='')
