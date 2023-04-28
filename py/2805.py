import sys
from bisect import bisect_left

N, M = map(int, sys.stdin.readline().split())

tall = list(map(int, sys.stdin.readline().split()))


def check(a):
    sum = 0
    for i in tall:
        if i > a:
            sum += i-a
    if sum >= M:
        return True
    else:
        return False


left = 0
right = max(tall)

while left <= right:
    mid = (left+right)//2
    if check(mid):
        left = mid+1
    else:
        right = mid-1
result = right

print(result)
