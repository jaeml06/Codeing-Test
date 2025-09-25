n, k = map(int, input().split())
arr = [int(input()) for _ in range(n)]
arr.sort()
right = 0
cur = 0
cnt = 0

for left in range(n):
    cur = arr[left]
    right = left + 1
    while right < n and left < right:
        if cur + arr[right] <= k:
            cnt += 1 
        
        right += 1

print(cnt)
