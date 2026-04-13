n = int(input())

arr = sorted(list(map(int, input().split())))

x = int(input())
i = 0
j = n - 1

cnt = 0

while i < j:
    if arr[i] + arr[j] == x:
        cnt += 1
        i += 1
        j -= 1
    elif arr[i] + arr[j] < x:
        i += 1
    elif arr[i] + arr[j] > x:
        j -= 1
print(cnt)
    