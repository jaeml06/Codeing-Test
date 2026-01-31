import sys
n, k = map(int, input().split())
arr = list(map(int, input().split()))

total_sum = [0] * (n + 1)
ans = -sys.maxsize

for i in range(1, n + 1):
    total_sum[i] = total_sum[i-1] + arr[i - 1]

for i in range(0, n - k + 1):
    ans = max(ans, total_sum[i + k] - total_sum[i])

print(ans)
