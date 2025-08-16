n = int(input())
arr = list(map(int, input().split()))

arr.sort()
cnt = 0
while len(arr) != 1:
    if len(arr) >= 2:
        arr.append(arr[0] + arr[1])
        cnt += arr[0] + arr[1]
        arr = arr[2:]
        arr.sort()

print(cnt)