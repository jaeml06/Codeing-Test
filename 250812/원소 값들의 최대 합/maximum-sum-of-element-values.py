n, m = map(int, input().split())
arr = [0] + list(map(int, input().split()))

# Please write your code here.
max_sum = 0
for i in range(1, n + 1):
    pos = i
    cnt = 0
    for _ in range(m):
        cnt += arr[pos]
        pos = arr[pos]
    max_sum = max(max_sum, cnt)
print(max_sum)