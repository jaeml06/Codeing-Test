N, K = map(int, input().split())
num = [int(input()) for _ in range(N)]

# Please write your code here.
max_cnt = 0
for i in range(N):
    target = num[i]
    idx1 = i
    idx2 = i
    cnt =0
    while idx2 < N-1:
        idx2+=1
        if num[idx2] == target:
            if K >= idx2 - idx1:
                cnt+=1
            idx1 = idx2
    max_cnt = max(max_cnt, cnt)
print(max_cnt)

