n, k = map(int, input().split())
arr = list(map(int, input().split()))

ans = 0
for i in range(0, n- k + 1):
    ans = max(ans, sum(arr[i:i+k]))

print(ans)