n = int(input())
arr = list(map(int, input().split()))
count = [0] * (100_001)

ans = 0
i = 0  # 왼쪽 포인터(0-index)
for j in range(n):
    x = arr[j]
    count[x] += 1

    while count[x] > 1:
        count[arr[i]] -= 1
        i += 1
        
    ans = max(ans, j - i + 1)

print(ans)