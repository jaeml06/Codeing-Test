n = int(input())
a = list(map(int, input().split()))

# Please write your code here.
max_cnt = 0
for i in range(1, 101):
    cnt = 0
    for j in range(n):
        for k in range(j + 1, n):
            if a[k] - i == i - a[j]:
                cnt += 1
    max_cnt = max(max_cnt, cnt)

print(max_cnt)