N = int(input())
a1, b1, c1 = map(int, input().split())
a2, b2, c2 = map(int, input().split())

def circ_dist(x, y, N):
    d = abs(x - y)
    return min(d, N - d)  # 원형 거리

cnt = 0
for i in range(1, N + 1):
    for j in range(1, N + 1):
        for k in range(1, N + 1):
            open1 = (
                circ_dist(i, a1, N) <= 2 and
                circ_dist(j, b1, N) <= 2 and
                circ_dist(k, c1, N) <= 2
            )
            open2 = (
                circ_dist(i, a2, N) <= 2 and
                circ_dist(j, b2, N) <= 2 and
                circ_dist(k, c2, N) <= 2
            )
            if open1 or open2:
                cnt += 1

print(cnt)