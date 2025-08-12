n = int(input())
moves = [tuple(map(int, input().split())) for _ in range(n)]
a, b, c = zip(*moves)
a, b, c = list(a), list(b), list(c)

# Please write your code here.
max_cnt = 0
for pos in range(1, 4):
    cnt = 0
    temp = [False] * 4
    temp[pos] = True
    for i in range(n):
        
        temp1 = temp[b[i]]
        temp[b[i]] = temp[a[i]]
        temp[a[i]] = temp1
        if temp[c[i]]:
            cnt += 1
    max_cnt = max(max_cnt, cnt)

print(max_cnt)