n, k = map(int, input().split())
arr = [int(input()) for _ in range(n)]
arr.sort()

cnt = 0

right = n -1

for left in range(n):
    while arr[left] + arr[right] > k:
        right -=1

    if right <= left:
        break
    
    cnt += right - left

print(cnt)
