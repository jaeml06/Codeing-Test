N, C, G, H = map(int, input().split())
ranges = [tuple(map(int, input().split())) for _ in range(N)]

# Please write your code here.
max_out = 0

for i in range(1001):
    total = 0
    for j in range(N):
        if i < ranges[j][0]:
            total += C
        if i >= ranges[j][0] and i <= ranges[j][1]:
            total += G
        if i > ranges[j][1]:
            total += H
        max_out = max(max_out, total)

print(max_out)