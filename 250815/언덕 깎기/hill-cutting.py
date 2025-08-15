import sys
N = int(input())
heights = [int(input()) for _ in range(N)]

ans = sys.maxsize

for L in range(0, 84):
    R = L + 17
    cost = 0
    for h in heights:
        if h < L:
            d = L - h
            cost += d * d
        elif h > R:
            d = h - R
            cost += d * d
    
    ans = min(ans, cost)

print(ans)