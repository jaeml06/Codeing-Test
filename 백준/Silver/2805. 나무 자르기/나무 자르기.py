import sys
input = sys.stdin.readline

n, m = map(int, input().split())
arr = list(map(int, input().split()))

left, right = 0, max(arr)
answer = 0

while left <= right:
    mid = (left + right) // 2
    total = 0

    for x in arr:
        if x > mid:
            total += x - mid

    if total >= m:
        answer = mid
        left = mid + 1
    else:
        right = mid - 1

print(answer)