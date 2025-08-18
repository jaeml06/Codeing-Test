n = int(input())

ans = 100000

for i in range(0, (n // 5) + 1):
    remain = n - 5 * i
    if remain >=0 and remain % 2 == 0:
        ans = min(ans, i + (remain // 2))

if ans == 100000:
    ans = -1
print(ans)