n, k = map(int, input().split())
arr = list(map(int, input().split()))

count = {}
ans = 0
for elem in arr:
    if elem in count:
        count[elem] += 1
    else:
        count[elem] = 1

for i in range(n):
    count[arr[i]] -= 1

    for j in range(i):
        temp = k - arr[i] - arr[j]

        if temp in count:
            ans += count[temp]
print(ans)
