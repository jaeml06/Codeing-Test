n = int(input())

cnt = 0
length = 1
start = 1

while start * 10 <= n:
    cnt += 9 * start * length
    start *= 10
    length += 1
cnt += (n - start + 1) * length

print(cnt)