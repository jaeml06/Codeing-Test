n, m = map(int, input().split())

arr = [[(i * m) + j for j in range(1, m + 1)] for i in range(n)]
for a in arr:
    print(*a)