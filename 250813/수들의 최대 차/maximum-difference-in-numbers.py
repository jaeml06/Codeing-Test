N, K = map(int, input().split())
arr = [int(input()) for _ in range(N)]

arr.sort()
max_cnt = 0
for i in range(N):
    for j in range(i + 1, N):
        if arr[j] - arr[i] <= K:  
            max_cnt = max(max_cnt, j - i + 1)
print(max_cnt)