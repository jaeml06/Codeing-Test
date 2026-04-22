a, b = map(int, input().split())
cnt = 0
for i in range(a , b + 1):
    temp = str(i)
    if ('3' in temp or '6' in temp or '9' in temp) or i % 3 == 0:
        cnt += 1
print(cnt)