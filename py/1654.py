import sys

input = sys.stdin.readline

K, N = map(int, input().split())
data = [int(input()) for i in range(K)]


def check(a):
    count = 0
    for i in data:
        count += i // a
    return count >= N


left = 1
right = max(data)

while left <= right:
    mid = (left + right) // 2

    if check(mid):
        left = mid + 1
    else:
        right = mid - 1

print(right)
