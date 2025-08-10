n = int(input())
times = [tuple(map(int, input().split())) for _ in range(n)]
a = [t[0] for t in times]
b = [t[1] for t in times]

max_count = 0
for i in range(n):                
    temp = [False] * 1001
    for k in range(n):
        if i == k:
            continue
        for t in range(a[k], b[k]):
            temp[t] = True
    max_count = max(max_count, temp.count(True))

print(max_count)