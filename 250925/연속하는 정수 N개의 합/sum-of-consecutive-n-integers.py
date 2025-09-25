n, m = map(int, input().split())
arr = list(map(int, input().split()))

cnt = 0
rigth = 0
cur = 0

for left in range(n):
    while rigth < n and cur < m:
        cur += arr[rigth]
        rigth += 1
    
    if m == cur:
        cnt += 1
    
    cur -= arr[left]

print(cnt)