n, k = map(int, input().split())
arr = [int(input()) for _ in range(n)][::-1]

cnt = 0
for val in arr:
    cnt += k//val
    k = k % val
print(cnt)