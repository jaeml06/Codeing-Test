import sys
n = int(input())
a = [int(input()) for _ in range(n)]

ans = sys.maxsize
for i in range(n):
    total = 0
    for j in range(n):
        idx = (i + j) % n
        total += j * a[idx]
    ans = min(ans, total)

print(ans)