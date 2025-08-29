n = int(input())
arr = list(map(int, input().split()))

count = [0] * 100_001

ans = 0

i = 0
for j in range(n):
    while i + 1 < n and count[arr[i + 1]] != 1:
        count[arr[i+1]] += 1
        i += 1
    ans = max(ans, i - j)

    count[arr[j]] -= 1

print(ans)