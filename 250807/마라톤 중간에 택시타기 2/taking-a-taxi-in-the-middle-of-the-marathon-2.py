import sys

n = int(input())
points = [tuple(map(int, input().split())) for _ in range(n)]
x = [p[0] for p in points]
y = [p[1] for p in points]

# Please write your code here.
ans = sys.maxsize
for i in range(1, n-1):
    dist = 0
    prev_idx = 0
    for j in range(i, n):
        if i == j:
            continue
        dist += abs(x[prev_idx] - x[j]) + abs(y[prev_idx] - y[j])
        prev_idx = j
        
    ans = min(ans, dist)

print(ans)