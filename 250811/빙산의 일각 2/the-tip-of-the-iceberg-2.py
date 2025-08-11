n = int(input())
h = [int(input()) for _ in range(n)]

MAXH = 1000
ans = 0

for L in range(0, MAXH + 1):
    cnt = 0
    i = 0
    while i < n:
        if h[i] > L:          # 새 섬 시작
            cnt += 1
            while i < n and h[i] > L:
                i += 1
        else:
            i += 1
    ans = max(ans, cnt)

print(ans)